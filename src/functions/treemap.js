/*
 * treemap-squarify.js - open source implementation of squarified treemaps
 *
 * Treemap Squared 0.5 - Treemap Charting library
 *
 * https://github.com/imranghory/treemap-squared/
 *
 * Copyright (c) 2012 Imran Ghory (imranghory@gmail.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 *
 * Implementation of the squarify treemap algorithm described in:
 *
 * Bruls, Mark; Huizing, Kees; van Wijk, Jarke J. (2000), "Squarified treemaps"
 * in de Leeuw, W.; van Liere, R., Data Visualization 2000:
 * Proc. Joint Eurographics and IEEE TCVG Symp. on Visualization, Springer-Verlag, pp. 33–42.
 *
 * Paper is available online at: http://www.win.tue.nl/~vanwijk/stm.pdf
 *
 * The code in this file is completeley decoupled from the drawing code so it should be trivial
 * to port it to any other vector drawing library. Given an array of datapoints this library returns
 * an array of cartesian coordinates that represent the rectangles that make up the treemap.
 *
 * The library also supports multidimensional data (nested treemaps) and performs normalization on the data.
 *
 * See the README file for more details.
 */

function Container(xoffset, yoffset, width, height) {
  this.xoffset = xoffset; // offset from the the top left hand corner
  this.yoffset = yoffset; // ditto
  this.height = height;
  this.width = width;

  this.shortestEdge = function () {
    return Math.min(this.height, this.width);
  };

  // getCoordinates - for a row of boxes which we've placed
  //                  return an array of their cartesian coordinates
  this.getCoordinates = function (row) {
    const coordinates = [];
    let subxoffset = this.xoffset;
    let subyoffset = this.yoffset; //our offset within the container
    if (this.width >= this.height) {
      const areawidth = sumArray(row) / this.height;
      for (let i = 0; i < row.length; i++) {
        coordinates.push([subxoffset, subyoffset, subxoffset + areawidth, subyoffset + row[i] / areawidth]);
        subyoffset = subyoffset + row[i] / areawidth;
      }
      return coordinates;
    }
    const areaheight = sumArray(row) / this.width;
    for (let i = 0; i < row.length; i++) {
      coordinates.push([subxoffset, subyoffset, subxoffset + row[i] / areaheight, subyoffset + areaheight]);
      subxoffset = subxoffset + row[i] / areaheight;
    }
    return coordinates;
  };

  // cutArea - once we've placed some boxes into an row we then need to identify the remaining area,
  //           this function takes the area of the boxes we've placed and calculates the location and
  //           dimensions of the remaining space and returns a container box defined by the remaining area
  this.cutArea = function (area) {
    if (this.width >= this.height) {
      const areawidth = area / this.height;
      const newwidth = this.width - areawidth;
      return new Container(this.xoffset + areawidth, this.yoffset, newwidth, this.height);
    }
    const areaheight = area / this.width;
    const newheight = this.height - areaheight;
    return new Container(this.xoffset, this.yoffset + areaheight, this.width, newheight);
  };
}

// normalize - the Bruls algorithm assumes we're passing in areas that nicely fit into our
//             container box, this method takes our raw data and normalizes the data values into
//             area values so that this assumption is valid.
const normalize = (data, area) => {
  const multiplier = area / sumArray(data);
  return data.map(d => d * multiplier);
};

// treemapSingledimensional - simple wrapper around squarify
const treemapSingledimensional = (data, width, height, xoffset, yoffset) => {
  xoffset = (typeof xoffset === "undefined") ? 0 : xoffset;
  yoffset = (typeof yoffset === "undefined") ? 0 : yoffset;
  const rawtreemap = squarify(normalize(data, width * height), [], new Container(xoffset, yoffset, width, height), []);
  return rawtreemap.flat(1);
};

// squarify  - as per the Bruls paper
//             plus coordinates stack and containers so we get
//             usable data out of it
const squarify = (data, currentrow, container, stack) => {
  if (data.length === 0) {
    stack.push(container.getCoordinates(currentrow));
    return;
  }
  const length = container.shortestEdge();
  const nextdatapoint = data[0];
  if (improvesRatio(currentrow, nextdatapoint, length)) {
    currentrow.push(nextdatapoint);
    squarify(data.slice(1), currentrow, container, stack);
  } else {
    const newcontainer = container.cutArea(sumArray(currentrow), stack);
    stack.push(container.getCoordinates(currentrow));
    squarify(data, [], newcontainer, stack);
  }
  return stack;
};

// improveRatio - implements the worse calculation and comparision as given in Bruls
//                (note the error in the original paper; fixed here)
const improvesRatio = (currentrow, nextnode, length) => {
  if (currentrow.length === 0) return true;
  const newrow = currentrow.slice();
  newrow.push(nextnode);
  const currentratio = calculateRatio(currentrow, length);
  const newratio = calculateRatio(newrow, length);
  // the pseudocode in the Bruls paper has the direction of the comparison
  // wrong, this is the correct one.
  return currentratio >= newratio;
};

// calculateRatio - calculates the maximum width to height ratio of the
//                  boxes in this row
const calculateRatio =(row, length) => {
  const min = Math.min.apply(Math, row);
  const max = Math.max.apply(Math, row);
  const sum = sumArray(row);
  return Math.max(Math.pow(length, 2) * max / Math.pow(sum, 2), Math.pow(sum, 2) / (Math.pow(length, 2) * min));
};

// sumArray - sums a single dimensional array
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// sumMultidimensionalArray - sums the values in a nested array (aka [[0,1],[[2,3]]])
function sumMultidimensionalArray(arr) {
  if (!Array.isArray(arr[0])) return sumArray(arr);
  return arr.reduce((acc, curr) => acc + sumMultidimensionalArray(curr), 0);
}

// treemapMultidimensional - takes multidimensional data (aka [[23,11],[11,32]] - nested array)
//                           and recursively calls itself using treemapSingledimensional
//                           to create a patchwork of treemaps and merge them
export default function treemapMultidimensional(data, width, height, xoffset, yoffset) {
  xoffset = (typeof xoffset === "undefined")? 0: xoffset;
  yoffset = (typeof yoffset === "undefined")? 0: yoffset;
  if (!Array.isArray(data[0])) return treemapSingledimensional(data, width, height, xoffset, yoffset);
  // if we've got more dimensions of depth
  const mergeddata = data.map(sumMultidimensionalArray);
  const mergedtreemap = treemapSingledimensional(mergeddata, width, height, xoffset, yoffset);
  return data.map((node, i) => {
    return treemapMultidimensional(node, mergedtreemap[i][2] - mergedtreemap[i][0], mergedtreemap[i][3] - mergedtreemap[i][1], mergedtreemap[i][0], mergedtreemap[i][1]);
  });
};

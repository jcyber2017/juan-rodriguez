import React from "react";

import treemap from 'functions/treemap';

const longestSide = (width: number, height: number): number => Math.max(width, height);
const getFontSize = (width: number, height: number): number => {
  const l = longestSide(width, height);
  return (l * 0.1) * 0.8;
};

const createRect = (node: number[], label: string, containerWidth: number, containerHeight: number) => {
  const [x, y, width, height] = node;
  const w = width - x;
  const h = height - y;
  const containerArea = containerWidth * containerHeight;
  const area = w * h;
  const opacity = area / containerArea;
  const fill = `hsla(208, 56%, 49%, ${opacity})`;
  const textX = x + (w/2);
  const textY = y + (h/2);
  let fontSize = Math.max(10, getFontSize(w, h));
  let transform: any = {};
  if (h > w) {
    transform = {
      transform: `rotate(-90 ${textX} ${textY})`
    };
  }
  if (fontSize * label.length > longestSide(w, h)) {
    fontSize = 0;
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke="#FFFFFF" strokeWidth="1" />
      <text x={textX} y={textY} text-anchor="middle" fill="#FFFFFF" font-size={fontSize} {...transform}>{label}</text>
    </g>
  );
}

const draw = (labels: string[], values: number[], width: number, height: number) => {
  const nodes = treemap(values, width, height);
  return nodes.map((node: any, i: number) => createRect(node, labels[i], width, height));
}

type Props = {
  labels: string[];
  values: number[];
  width: number;
  height: number;
}

const TreeMapSquares = ({labels, values, width, height}: Props) => {
  return (
    <div>
      <svg version="1.1"
        baseProfile="full"
        width={width}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100%" height="100%" fill="hsl(208, 56%, 20%)" />
        {draw(labels, values, width, height)}
      </svg>
    </div>
  );
};

export default TreeMapSquares;

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Cook = lazy(() => import('pages/cook'));
const CV = lazy(() => import('pages/cv'));
const Main = lazy(() => import('pages/main'));

const JuanRoutes = () => (
  <Suspense fallback={<div />}>
    <Routes>
      <Route path="/cv" element={<CV />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Cook />} />
    </Routes>
  </Suspense>
);

export default JuanRoutes;

import * as React from "react";
import {Route, Routes} from "react-router-dom";

import Navbar from "./Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          } />
          <Route path="about" element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          } />
          <Route path="projects" element={
            <React.Suspense fallback={<>...</>}>
              <Projects />
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={<>...</>}>
              <NoMatch />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
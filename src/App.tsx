import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "@/pages";
import {Toaster} from "@/components/ui/sonner.tsx";
import "./App.css"
import {lazy, Suspense} from "react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";
import Loading from "@/components/layout/loading.tsx";


const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Jobs = lazy(() => import("@/pages/jobs/jobs"));
const Workers = lazy(() => import("@/pages/workers/workers"));
const JobDetail = lazy(() => import("@/pages/jobs/job-detail"));
const WorkerDetail = lazy(() => import("@/pages/workers/worker-detail"));
const NotFound = lazy(() => import("@/components/layout/not-found"));

function App() {
  const location = useLocation();
  return (
    <>
      <Toaster richColors/>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames={"fade"}
          timeout={300}
          unmountOnExit
        >
          <Routes location={location}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<Suspense fallback={<Loading/>}>
              <About/>
            </Suspense>}/>
            <Route path={"/contact"} element={
              <Suspense fallback={<Loading/>}>
                <Contact/>
              </Suspense>
            }/>
            <Route path={"/jobs"} element={
              <Suspense fallback={<Loading/>}>
                <Jobs/>
              </Suspense>
            }/>
            <Route path={"/workers"} element={
              <Suspense fallback={<Loading/>}>
                <Workers/>
              </Suspense>
            }/>
            <Route element={
              <Suspense fallback={<Loading/>}>
                <JobDetail/>
              </Suspense>
            } path={"/jobs/:jobId"}/>
            <Route element={
              <Suspense fallback={<Loading/>}>
                <WorkerDetail/>
              </Suspense>
            } path={"/workers/:workerId"}/>
            <Route path={"*"} element={
              <Suspense fallback={<Loading/>}>
                <NotFound/>
              </Suspense>
            }/>
          </Routes>
        </CSSTransition>
      </SwitchTransition>
      <SpeedInsights/>
      <Analytics/>
    </>
  );
}

export default App;

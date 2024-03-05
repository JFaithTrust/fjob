import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  JobDetail,
  Jobs,
  Layout,
  Workers,
} from "./pages";
import WorkerDetail from "./pages/workers/worker-detail";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="job-detail/:jobId" element={<JobDetail />} />
          <Route path="workers" element={<Workers />} />
          <Route path="worker-detail/:workerId" element={<WorkerDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

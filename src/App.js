import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { RegisterInstitution } from "./pages/RegisterInstitution";
import { RegisterCampi } from "./pages/RegisterCampi";
import { NoMatch } from "./pages/NoMatch";
import { RegisterYearInfo } from "./pages/RegisterYearInfo";
import { RegisterCourse } from "./pages/RegisterCourse";
import { CourseQuestion } from "./pages/CourseQuestion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registerinstitution" element={<RegisterInstitution />} />
        <Route path="registercampi" element={<RegisterCampi />} />
        <Route path="coursequestion" element={<CourseQuestion />} />
        <Route path="registercourse" element={<RegisterCourse />} />
        <Route path="yearinfo" element={<RegisterYearInfo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegisterInstitution } from "./pages/RegisterInstitution";
import { RegisterCampi } from "./pages/RegisterCampi";
import { NoMatch } from "./pages/NoMatch";
import { Navbar } from "./components/Navbar";
import RegisterCourse from "./pages/RegisterCourse";
import CourseQuestion from "./pages/CourseQuestion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterInstitution />} />
        <Route path="registercampi" element={<RegisterCampi />} />
        <Route path="coursequestion" element={<CourseQuestion />} />
        <Route path="registercourse" element={<RegisterCourse />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

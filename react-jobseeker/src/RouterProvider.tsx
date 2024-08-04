import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import PersonalInfo from "./components/JobFill/PersonalInfo/PersonalInfo";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;

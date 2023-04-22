import ReactForm from "./components/ReactForm";
import EditReactForm from "./components/EditReactForm";
import ProfilePictureEditForm from "./components/ProfilePictureEditForm";
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form";
function App() {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

// Example starter JavaScript for disabling form submissions if there are invalid fields


export default App;

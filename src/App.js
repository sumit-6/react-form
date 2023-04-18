import ReactForm from "./components/ReactForm";
import EditReactForm from "./components/EditReactForm";
import ProfilePictureEditForm from "./components/ProfilePictureEditForm";
import { Routes, Route, useLocation } from "react-router-dom";
import bsCustomFileInput from "bs-custom-file-input";
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
(function () {
  bsCustomFileInput.init();
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validated-form");

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

export default App;

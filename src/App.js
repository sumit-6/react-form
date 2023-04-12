import ReactForm from "./components/ReactForm";
import EditReactForm from "./components/EditReactForm";
import ProfilePictureEditForm from "./components/ProfilePictureEditForm";
import {Routes, Route, useLocation} from 'react-router-dom';
import bsCustomFileInput from 'bs-custom-file-input';
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
function App() {
  const location = useLocation();
  const ID = location.pathname.split('/')[2];
  return (
    <Routes>
      <Route path="/" element={<ReactForm />} />
      <Route path="/edit/:id" element={<EditReactForm id={ID} />} />
      <Route path="/edit/:id/profilePicture" element={<ProfilePictureEditForm id={ID}/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/create-account' element={<CreateAccountPage />} />
    </Routes>
  );
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  bsCustomFileInput.init()
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.validated-form')

  // Loop over them and prevent submission
  Array.from(forms)
      .forEach(function (form) {
      form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          }

          form.classList.add('was-validated')
      }, false)
      })
})()

export default App;

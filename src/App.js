import ReactForm from "./components/ReactForm";
import EditReactForm from "./components/EditReactForm";
import ProfilePictureEditForm from "./components/ProfilePictureEditForm";
import {Routes, Route, useLocation} from 'react-router-dom';
function App() {
  const location = useLocation();
  const ID = location.pathname.split('/')[2];
  return (
    <Routes>
      <Route path="/" element={<ReactForm />} />
      <Route path="/edit/:id" element={<EditReactForm id={ID} />} />
      <Route path="/edit/:id/profilePicture" element={<ProfilePictureEditForm id={ID}/>} />
    </Routes>
  );
}

export default App;

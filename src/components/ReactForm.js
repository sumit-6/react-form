import '../App.css';
import FirstLayer from './FirstLayer';
import MyEducation from './myEducation';
import MyExperience from './myExperience';
import MyProjects from './myProjects';
import MySkills from './mySkills';
import MyAchievements from './myAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../index';
import { signOut } from 'firebase/auth';
import axios from 'axios';

function ReactForm() {
  const {user, isLoading} = useUser();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate('/');
    }).catch((err) => {
      console.log(err.message);
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('.validated-form');
    const formData = new FormData(form);
  
    const config = {
      headers: {
        'authtoken': await user.getIdToken()
      },
      enctype: 'multipart/form-data'
    }
  
    const response = await axios.post('http://localhost:8000/portfolio/insert', formData, config);
    if(response.data === "Success") {
      window.location.href = 'http://localhost:3000/portfolio';
    } else {
      window.location.href = 'http://localhost:3000/';
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      {isLoading && <div>
          <h1 style={{color: "black"}}>Loading....</h1>
          </div>}
        {(!isLoading && user) && <form encType='multipart/form-data' novalidate className="validated-form">
          <FirstLayer name='' telephone='' description='' instagram='' linkedIn='' email='' profilePicture={{url: null, filename: null}} mainDesignations={['']} />
          <br></br>
          <MyEducation data={[{institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]}/>
          <br></br>
          <MyExperience data={[{role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]}/>
          <br></br>
          <MyProjects data={[{projectName: "", gitHubLink: "", projectLink: "", description: [""]}]}/>
          <br></br>
          <MySkills data={{programmingSkills: [{skillName: "", skillLevel: ""}], toolsAndFrameworks: [{toolName: "", toolLevel: ""}]}}/>
          <br></br>
          <MyAchievements data={[""]}/>
          <button onClick={(e) => handleSubmit(e)} className="btn btn-warning btn-lg m-3">Submit</button>
          <button onClick={(e) => handleLogout(e)} className="btn btn-warning btn-lg m-3">Logout</button>
        </form> }
        {(!isLoading && !user) && <div>
            <h1 style={{color: "black"}}>You are not logged In</h1>
            <button onClick={() => navigate('login')} className="btn btn-warning btn-lg m-3">
              Log In
            </button>
            <button onClick={() => navigate("create-account")} className="btn btn-warning btn-lg m-3">
              Sign Up
            </button>
          </div>}
        <br></br>
      </header>
    </div>
  );
}

export default ReactForm;

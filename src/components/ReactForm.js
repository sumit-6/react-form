import '../App.css';
import FirstLayer from './FirstLayer';
import MyEducation from './myEducation';
import MyExperience from './myExperience';
import MyProjects from './myProjects';
import MySkills from './mySkills';
import MyAchievements from './myAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

function ReactForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector('.validated-form');
    const formData = new FormData(form);
  
    const config = {
      headers: {
        'authtoken': props.token
      },
      enctype: 'multipart/form-data'
    }
  
    const response = await axios.post('https://source-folio-backend.onrender.com/portfolio/insert', formData, config);
    if(response.data === "Success") {
      window.location.href = `https://source-folio-frontend.vercel.app/`;
    } else {
      window.location.href = 'https://source-folio-frontend.vercel.app/';
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color: 'black'}}><u><b>SourceFolio Form</b></u></h1>
        <form encType='multipart/form-data' novalidate className="validated-form">
          <FirstLayer name='' telephone='' description='' bio='' yearsOfExperience='' numberOfProjects='' githubProfile='' instagram='' linkedIn='' email='' profilePicture={{url: null, filename: null}} mainDesignations={['']} />
          <br></br>
          <MyEducation data={[{institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]}/>
          <br></br>
          <MyExperience data={[]} />
          <br></br>
          <MyProjects data={[{projectName: "", gitHubLink: "", projectLink: "", description: [""]}]}/>
          <br></br>
          <MySkills data={{programmingSkills: [{skillName: "", skillLevel: ""}], toolsAndFrameworks: [{toolName: "", toolLevel: ""}]}}/>
          <br></br>
          <MyAchievements data={[""]}/>
          <button onClick={(e) => handleSubmit(e)} className="btn btn-warning btn-lg m-3">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default ReactForm;

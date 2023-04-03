import '../App.css';
import FirstLayer from './FirstLayer';
import MyEducation from './myEducation';
import MyExperience from './myExperience';
import MyProjects from './myProjects';
import MySkills from './mySkills';
import MyAchievements from './myAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactForm() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="http://localhost:8000/portfolio/insert" method="POST">
          <FirstLayer name='' telephone='' description='' instagram='' linkedIn='' email='' profilePicture='' mainDesignations={['']} />
          <br></br>
          
          <MyEducation data={[{institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]}/>
          <br></br>
          <MyExperience data={[{role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]}/>
          <br></br>
          <MyProjects data={[{projectName: "", githubLink: "", projectLink: "", description: [""]}]}/>
          <br></br>
          <MySkills data={{programmingSkills: [{skillName: "", skillLevel: ""}], toolsAndFrameworks: [{toolName: "", toolLevel: ""}]}}/>
          <br></br>
          <MyAchievements data={[""]}/>
          <button type="submit" class="btn btn-warning btn-lg m-3">Submit</button>
          
        </form>
        <br></br>
      </header>
    </div>
  );
}

export default ReactForm;

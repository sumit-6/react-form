import './App.css';
import MainDesignation from './components/mainDesignation';
import FirstLayer from './components/FirstLayer';
import MyEducation from './components/myEducation';
import MyExperience from './components/myExperience';
import MyProjects from './components/myProjects';
import MySkills from './components/mySkills';
import MyAchievements from './components/myAchievements';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="http://localhost:8000/portfolio/insert" method="POST">
          <FirstLayer />
          <br></br>
          <MainDesignation />
          <br></br>
          <hr></hr>
          <h2>Education</h2>
          <MyEducation />
          <br></br>
          <hr></hr>
          <h2>Experience</h2>
          <MyExperience />
          <br></br>
          <hr></hr>
          <h2>Projects</h2>
          <MyProjects />
          <br></br>
          <hr></hr>
          <h2>Skills</h2>
          <MySkills />
          <br></br>
          <hr></hr>
          <h2>Achievements</h2>
          <MyAchievements />
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import FirstLayer from './components/FirstLayer';
import MyEducation from './components/myEducation';
import MyExperience from './components/myExperience';
import MyProjects from './components/myProjects';
import MySkills from './components/mySkills';
import MyAchievements from './components/myAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="http://localhost:8000/portfolio/insert" method="POST">
          <FirstLayer />
          <br></br>
          
          <MyEducation />
          <br></br>
          <MyExperience />
          <br></br>
          <MyProjects />
          <br></br>
          <MySkills />
          <br></br>
          <MyAchievements />
          <button type="submit" class="btn btn-warning btn-lg m-3">Submit</button>
          
        </form>
        <br></br>
      </header>
    </div>
  );
}

export default App;

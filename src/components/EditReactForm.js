import '../App.css';
import FirstLayer from './FirstLayer';
import MyEducation from './myEducation';
import MyExperience from './myExperience';
import MyProjects from './myProjects';
import MySkills from './mySkills';
import MyAchievements from './myAchievements';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EditReactForm(props) {
    const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {(async () => {
        //console.log('hello');
            const response = await axios.get(`http://localhost:8000/api/portfolio/${props.id}`);
            const dataRes = response.data;
            setData(dataRes);
            console.log(dataRes);
            setIsReady(true);
        })();
    }, [props.id]);
   
    
  return (
    <div className="App">
      <header className="App-header">
        {isReady && <form action={`http://localhost:8000/portfolio/edit/${props.id}`} method="POST">
          <FirstLayer name={data.name} description={data.description} profilePicture={data.profilePicture} linkedIn={data.linkedIn} instagram={data.instagram} telephone={data.telephone} email={data.email} mainDesignations={data.mainDesignations}/>
          <br></br>
          
          <MyEducation data={data.myEducation}/>
          <br></br>
          <MyExperience data={data.myExperience}/>
          <br></br>
          <MyProjects data={data.myProjects}/>
          <br></br>
          <MySkills data={data.mySkills}/>
          <br></br>
          <MyAchievements data={data.myAchievements}/>
          <button type="submit" class="btn btn-warning btn-lg m-3">Submit</button>
          
        </form>}
        <br></br>
      </header>
    </div>
  );
}

export default EditReactForm;

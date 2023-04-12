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
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { auth } from '../index';
import { signOut } from 'firebase/auth';

function EditReactForm(props) {
    const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState({});
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

  useEffect(() => {(async () => {
        //console.log('hello');
            const token = user && await user.getIdToken();
            const response = await axios.get(`http://localhost:8000/api/portfolio/${props.id}`, {headers: {authtoken: token}});
            const dataRes = response.data;
            setData(dataRes);
            console.log(dataRes);
            setIsReady(true);
        })();
    }, [props.id]);
   
    
  return (
    <div className="App">
      <header className="App-header">
        {(isReady && user) ? <form action={`http://localhost:8000/portfolio/edit/${props.id}`} method="POST" novalidate class="validated-form">
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
          <button type="button" onClick={handleLogout} className="btn btn-warning btn-lg m-3">Logout</button>
        </form> : <div>
            <h1 style={{color: "black"}}>You can't perform this action!!</h1>
          </div>}
        <br></br>
      </header>
    </div>
  );
}

export default EditReactForm;

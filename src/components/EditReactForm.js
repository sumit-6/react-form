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
            console.log(user);
            const token = user && await user.getIdToken();
            const response = await axios.get(`http://localhost:8000/api/portfolio/${props.id}`, {headers: {authtoken: token}});
            if(typeof(response.data) === 'object') {
              const dataRes = response.data;
              setData(dataRes);
              setIsReady(true);
            }
        })();
    }, [user]);
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = document.querySelector('.validated-form');
      const formData = new FormData(form);
    
      const config = {
        headers: {
          'authtoken': await user.getIdToken()
        }
      }
    
      await axios.post(`http://localhost:8000/portfolio/edit/${props.id}`, formData, config)
    }

    const handleDelete = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'authtoken': await user.getIdToken()
        }
      }
    
      await axios.post(`http://localhost:8000/portfolio/delete/${props.id}`, config)
    }
    
  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <div>
          <h1 style={{color: "black"}}>Loading....</h1>
          </div>}
        {(isReady && user && user.uid === data.user_id) && <form novalidate class="validated-form">
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
          <button onClick={handleSubmit} class="btn btn-warning btn-lg m-3">Submit</button>
          <button type="button" onClick={e => handleLogout(e)} className="btn btn-warning btn-lg m-3">Logout</button>
          <button type="button" onClick={e => handleDelete(e)} className="btn btn-danger btn-lg m-3">Delete</button>
        </form>}
        {(!isLoading && user && (user.uid !== data.user_id)) && <div>
          <h1 style={{color: "black"}}>You can't perform this action</h1>
          </div>}
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

export default EditReactForm;

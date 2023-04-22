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
import bsCustomFileInput from "bs-custom-file-input";

function EditReactForm(props) {
  (function () {
    bsCustomFileInput.init();
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".validated-form");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {(async () => {
    
            const token = props.token;
            const response = await axios.get(`https://source-folio-backend.onrender.com/api/portfolio/${props.id}`, {headers: {authtoken: token}});
            if(typeof(response.data) === 'object') {
              const dataRes = response.data;
              setData(dataRes);
              setIsReady(true);
            }
        })();
    }, []);
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const form = document.querySelector(".validated-form");

        const formData_empty = new FormData(form);
        const formData = {};
        for (const key of formData_empty.entries()) {
            if(!formData[key[0]]) formData[key[0]] = key[1];
            else if(typeof(formData[key[0]]) !== 'object') {
              formData[key[0]] = [formData[key[0]]];
              formData[key[0]].push(key[1]);
            } else {
              formData[key[0]].push(key[1]);
            }
        }

        const config = {
          headers: {
            'authtoken': props.token
          }
        }
    
        const response = await axios.post(`https://source-folio-backend.onrender.com/portfolio/edit/${props.id}`, formData, config)
        if(response.data === "Success") {
          window.location.href = `https://source-folio-frontend.vercel.app/portfolio/${props.id}`;
        } else {
          window.location.href = `https://source-folio-frontend.vercel.app/`;
        }
      }
      catch(err) {
        console.error(err);
      }
    }

    /*const handleDelete = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'authtoken': await user.getIdToken()
        }
      }
    
      const response = await axios.post(`https://source-folio-backend.onrender.com/portfolio/delete/${props.id}`, {}, config);
      if(response.data === "Success") {
        window.location.href = `https://react-form-ten-steel.vercel.app/`;
      } else {
        window.location.href = 'https://source-folio-frontend.vercel.app/';
      }
    }*/
    
  return (
    <>
    {isReady && <div className="App">
      <header className="App-header">
      <h1 style={{color: 'black'}}><u><b>SourceFolio Form</b></u></h1>
        <form enctype="application/json" novalidate className="validated-form" onSubmit={handleSubmit}>
          <FirstLayer name={data.name} description={data.description} bio={data.bio} yearsOfExperience={data.yearsOfExperience} numberOfProjects={data.numberOfProjects} profilePicture={data.profilePicture} githubProfile={data.githubProfile}
           linkedIn={data.linkedIn} instagram={data.instagram} telephone={data.telephone} email={data.email} mainDesignations={data.mainDesignations} token={props.token} id={props.id}/>
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
          <button type="submit" className="btn btn-warning btn-lg m-3">Submit</button>
        </form>
      </header>
    </div>}
    {!isReady && <div className="BODY">
    <div className="loading">
      <div className="loading-bar"></div>
      <div className="loading-text">Loading...</div>
    </div>
    </div>}
    </>
  );
}

export default EditReactForm;

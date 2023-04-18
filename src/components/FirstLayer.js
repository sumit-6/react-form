import React, {useState} from "react";
import { Container } from "react-bootstrap";
import MainDesignation from "./mainDesignation";
import { useLocation } from "react-router-dom";

function FirstLayer(props) {
    const experienceLevelOptions = ['Fresher', '6+ Months', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years'];
    const projectNumberOptions = ['Beginner', '1-2 Projects', '3-5 Projects', '5-10 Projects', '10+ Projects'];

    
    const [inputObj, setinputObj]= useState({name:props.name, description:props.description, profilePicture: props.profilePicture, linkedIn: props.linkedIn, instagram: props.instagram, telephone: props.telephone, email: props.email, githubProfile: props.githubProfile, bio: props.bio, yearsOfExperience: props.yearsOfExperience, numberOfProjects: props.numberOfProjects });
    function getThumbnail(url) {
      return url.replace('/upload', '/upload/w_200')
  }
    const handleinputchange=(e)=>{
      const {name, value} = e.target;
      const obj = {...inputObj};
      obj[name] = value;
      setinputObj(obj);
    }
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      
      setinputObj({...inputObj, profilePicture: file})
    }

    const handleEditPicture=(e) => {
      e.preventDefault();
      window.location.href=`https://react-form-ten-steel.vercel.app/form?q=${props.token}&sfid=${props.id}&where=profilePicture`;
    }
  return (
    <Container className="content m-3">
     <div className="row card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
              <div className="row">
                 <div className="form-group col-md-4">
                 <label htmlFor="name" className="form-label">Name: </label>
                 <input type="text" id="name" name="name" className="form-control"  placeholder="Enter name" onChange={(e)=> handleinputchange(e)} value={inputObj.name} required/>
                 <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
                <label htmlFor="bio" className="form-label">Bio: </label>
                <textarea type="text" id="bio" name="bio" className="form-control" placeholder="Enter a brief description of yours, your hobby, your birthdate, and likings..." onChange={(e)=> handleinputchange(e)} rows="4" cols="40" value={inputObj.bio} required />
                <div className="valid-feedback">Looks Good</div>
               </div>
               
               <div className="form-group col-md-4">
                <label htmlFor="description" className="form-label">Description: </label>
                <textarea type="text" id="description" name="description" className="form-control" placeholder="Enter your description of your projessional life...
For Example: 'I am a Full Stack Developer and I can create web pages with UI/UX interfaces. Apart from that I love doing DSA and problem-solving.'" onChange={(e)=> handleinputchange(e)} rows="4" cols="40" value={inputObj.description} required />
                <div className="valid-feedback">Looks Good</div>
               </div>

               {(inputObj.profilePicture.url == null) && <div className="form-group col-md-4">
                <label htmlFor="profilePicture" className="form-label">Profile Picture: </label>
                <input type="file" id="profilePicture" name="profilePicture" className="form-control" placeholder="Enter profile picture" onChange={(e) => handleFileChange(e)} required />
                <div className="valid-feedback">Looks Good</div>
               </div>}

               {(inputObj.profilePicture.url) && <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <img src={getThumbnail(inputObj.profilePicture.url)} className="image-thumbnail" alt={inputObj.profilePicture.filename}></img>
                <div>
                <a onCLick={handleEditPicture}>Edit Profile Picture</a></div>
               </div> }
               
               <div className="form-group col-md-4">
                <label htmlFor="linkedIn" className="form-label">LinkedIn: </label>
                <input type="text" id="linkedIn" name="linkedIn" className="form-control" placeholder="Enter linkedIn profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.linkedIn} required />
                <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
                <label htmlFor="instagram" className="form-label">Instagram: </label>
                <input type="text" id="instagram" name="instagram" className="form-control" placeholder="Enter instagram profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.instagram} required />
                <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
                <label htmlFor="githubProfile" className="form-label">Github: </label>
                <input type="text" id="githubProfile" name="githubProfile" className="form-control" placeholder="Enter github profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.githubProfile} required />
                <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
                <label htmlFor="telephone" className="form-label">Mobile Number: </label>
                <input type="number" id="telephone" name="telephone" className="form-control" placeholder="Enter mobile number (whatsapp number)" onChange={(e)=> handleinputchange(e)} value={inputObj.telephone} required/>
                <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
                <label htmlFor="email" className="form-label">Email: </label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Enter email address" onChange={(e)=> handleinputchange(e)} value={inputObj.email} required/>
                <div className="valid-feedback">Looks Good</div>
               </div>

               <MainDesignation mainDesignations={props.mainDesignations} />
               <div className="form-group col-md-4">
               <label htmlFor={`yearsOfExperience`} className="form-label">Work Experience: </label>
                  <select id={`yearsOfExperience`} name="yearsOfExperience" className="form-control" onChange={ e=>handleinputchange(e)} value={inputObj.yearsOfExperience} required >
                    <option value="">Work Experience Options</option>
                    {experienceLevelOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
               <label htmlFor={`numberOfProjects`} className="form-label">Project Experience: </label>
                  <select id={`numberOfProjects`} name="numberOfProjects" className="form-control" onChange={ e=>handleinputchange(e)} value={inputObj.numberOfProjects} required >
                    <option value="">Project Experience Options</option>
                    {projectNumberOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="valid-feedback">Looks Good</div>
               </div>

               </div>
            </div>

          </div> 
    </Container>
  );
}
export default FirstLayer;
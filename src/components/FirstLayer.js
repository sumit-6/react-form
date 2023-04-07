import React, {useState} from "react";
import { Container } from "react-bootstrap";
import MainDesignation from "./mainDesignation";
import { useLocation } from "react-router-dom";

function FirstLayer(props) {
    const location = useLocation().pathname + "/profilePicture";
    
    const [inputObj, setinputObj]= useState({name:props.name, description:props.description, profilePicture: props.profilePicture, linkedIn: props.linkedIn, instagram: props.instagram, telephone: props.telephone, email: props.email});
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
  return (
    <Container className="content m-3">
     <div className="row card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
              <div className="row">
                 <div className="form-group col-md-4">
                 <label for="name" className="form-label">Name: </label>
                  <input type="text" id="name" name="name" className="form-control"  placeholder="Enter Name" onChange={(e)=> handleinputchange(e)} value={inputObj.name} required/>
               </div>
               
               <div className="form-group col-md-4">
                <label for="description" className="form-label">Description: </label>
                <textarea type="text" id="description" name="description" className="form-control" placeholder="Enter Description" onChange={(e)=> handleinputchange(e)} rows="4" cols="40" value={inputObj.description} required />
               </div>

               {(inputObj.profilePicture.url == null) && <div className="form-group col-md-4">
                <label for="profilePicture" className="form-label">Profile Picture: </label>
                <input type="file" id="profilePicture" name="profilePicture" className="form-control" placeholder="Enter profile picture" onChange={(e) => handleFileChange(e)} required />
               </div>}

               {(inputObj.profilePicture.url) && <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <img src={getThumbnail(inputObj.profilePicture.url)} className="image-thumbnail" alt={inputObj.profilePicture.filename}></img>
                <div>
                <a href={`${location}`}>Edit Profile Picture</a></div>
               </div> }
               
               <div className="form-group col-md-4">
                <label for="linkedIn" className="form-label">LinkedIn: </label>
                <input type="text" id="linkedIn" name="linkedIn" className="form-control" placeholder="Enter linkedIn profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.linkedIn} required />
               </div>

               <div className="form-group col-md-4">
                <label for="instagram" className="form-label">Instagram: </label>
                <input type="text" id="instagram" name="instagram" className="form-control" placeholder="Enter instagram profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.instagram} required />
               </div>

               <div className="form-group col-md-4">
                <label for="telephone" className="form-label">Mobile Number: </label>
                <input type="number" id="telephone" name="telephone" className="form-control" placeholder="Enter mobile number" onChange={(e)=> handleinputchange(e)} value={inputObj.telephone} required/>
               </div>

               <div className="form-group col-md-4">
                <label for="email" className="form-label">Email: </label>
                <input type="text" id="email" name="email" className="form-control" placeholder="Enter email" onChange={(e)=> handleinputchange(e)} value={inputObj.email} required/>
               </div>

               <MainDesignation mainDesignations={props.mainDesignations} />
               </div>
            </div>

          </div> 
    </Container>
  );
}
export default FirstLayer;
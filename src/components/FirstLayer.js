import React, {useState} from "react";
import { Container } from "react-bootstrap";
import MainDesignation from "./mainDesignation";
import { useLocation } from "react-router-dom";

function FirstLayer(props) {
    const location = useLocation().pathname + "/profilePicture";
    
    const [inputObj, setinputObj]= useState({name:props.name, description:props.description, profilePicture: props.profilePicture, linkedIn: props.linkedIn, instagram: props.instagram, telephone: props.telephone, email: props.email});
    const [profilePic, setProfilePic] = useState(inputObj.profilePicture.url);
   
    const handleinputchange=(e)=>{
      const {name, value} = e.target;
      const obj = {...inputObj};
      obj[name] = value;
      setinputObj(obj);
    }
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      console.log(file);
      setinputObj({...inputObj, profilePicture: file})
    }
  return (
    <Container className="content m-3">
     <div className="row card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
              <div className="row">
                 <div className="form-group col-md-4">
                 <label >Name: </label>
                  <input type="text"  name="name" className="form-control"  placeholder="Enter Name" onChange={(e)=> handleinputchange(e)} value={inputObj.name}/>
               </div>
               
               <div className="form-group col-md-4">
                <label>Description: </label>
                <textarea type="text" name="description" className="form-control" placeholder="Enter Description" onChange={(e)=> handleinputchange(e)} rows="4" cols="40" value={inputObj.description}  />
               </div>

               {(profilePic == null) && <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <input type="file" name="profilePicture" className="form-control" placeholder="Enter profile picture" onChange={(e) => handleFileChange(e)}  />
               </div>}

               {(profilePic) && <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <div>
                <a href={`${location}`}>Edit Profile Picture</a></div>
               </div> }
               
               <div className="form-group col-md-4">
                <label>LinkedIn: </label>
                <input type="text" name="linkedIn" className="form-control" placeholder="Enter linkedIn profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.linkedIn} />
               </div>

               <div className="form-group col-md-4">
                <label>Instagram: </label>
                <input type="text" name="instagram" className="form-control" placeholder="Enter instagram profile url" onChange={(e)=> handleinputchange(e)} value={inputObj.instagram} />
               </div>

               <div className="form-group col-md-4">
                <label>Mobile Number: </label>
                <input type="number" name="telephone" className="form-control" placeholder="Enter mobile number" onChange={(e)=> handleinputchange(e)} value={inputObj.telephone}/>
               </div>

               <div className="form-group col-md-4">
                <label>Email: </label>
                <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={(e)=> handleinputchange(e)} value={inputObj.email}/>
               </div>

               <MainDesignation mainDesignations={props.mainDesignations} />
               </div>
            </div>

          </div> 
    </Container>
  );
}
export default FirstLayer;
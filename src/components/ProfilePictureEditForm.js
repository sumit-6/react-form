import React, {useState} from "react";
import { Container } from "react-bootstrap";
import useUser from "../hooks/useUser";
import axios from "axios";

function ProfilePictureEditForm(props) {
    const {user, isLoading} = useUser();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('.validated-form');
        console.log(form);
        const formData_empty = new FormData(form);
        const formData = {};
        for(const key of formData_empty.entries()) {
            formData[key[0]] = key[1];
        }
        console.log(formData);
        const config = {
          headers: {
            'authtoken': await user.getIdToken(),
            'Content-Type': 'multipart/form-data'
          },
          enctype: 'multipart/form-data'
        }
      
        const response = await axios.post(`http://localhost:8000/edit/profilePicture/${props.id}`, formData, config)
        if(response.data === "Success") {
            window.location.href = `https://react-form-ten-steel.vercel.app/edit/${props.id}`;
        } else {
            window.location.href = "http://localhost:3000/";
        }
      }

    return (
        <div className="App">
        <header className="App-header">
            <form className="validated-form">
            <Container className="content m-3">
     <div className="card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
       
              <div className="row pt-3">
              <h2>Edit Profile Picture</h2>
            <div className="form-group">
                <label for="profilePicture" className="form-label">Profile Picture: </label>
                <input type="file" id="profilePicture" name="profilePicture" className="form-control" placeholder="Enter profile picture" required />
                <button onClick={handleSubmit} className="btn btn-warning btn-lg m-3" style={{width: '90%'}}>Submit</button>
               </div>
               
            </div>
            
            </div>
            </div>
            </Container>
            
            </form>
            

            <br></br>
        </header>
    </div>
    );
}

export default ProfilePictureEditForm;
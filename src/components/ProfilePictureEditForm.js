import React, {useState} from "react";
import { Container } from "react-bootstrap";

function ProfilePictureEditForm(props) {

    return (
        <div className="App">
        <header className="App-header">
            <form action={`http://localhost:8000/edit/profilePicture/${props.id}`} method="POST" encType='multipart/form-data'>
            <Container className="content m-3">
     <div className="card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
       
              <div className="row pt-3">
              <h2>Edit Profile Picture</h2>
            <div className="form-group">
                <label>Profile Picture: </label>
                <input type="file" name="profilePicture" className="form-control" placeholder="Enter profile picture" />
                <button type="submit" class="btn btn-warning btn-lg m-3" style={{width: '90%'}}>Submit</button>
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
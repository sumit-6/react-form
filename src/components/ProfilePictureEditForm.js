import React, {useState} from "react";
import { Container } from "react-bootstrap";

function ProfilePictureEditForm(props) {

    return (
        <div className="App">
        <header className="App-header">
            <form action={`http://localhost:8000/edit/profilePicture/${props.id}`} method="POST" encType='multipart/form-data'>
            <Container className="content m-3">
     <div className="row card box shadow-lg bg-body rounded">
       <div className="col-sm-12">
              <div className="row">
            <div className="form-group col-md-4">
                <label>Profile Picture: </label>
                <input type="file" name="profilePicture" className="form-control" placeholder="Enter profile picture" />
               </div>
            <button type="submit" class="btn btn-warning btn-lg m-3">Submit</button>
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
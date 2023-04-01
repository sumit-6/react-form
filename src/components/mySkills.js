import React, {useState} from "react";
import { Container } from "react-bootstrap";
import ProgrammingSkills from "./programmingSkills";
import ToolsAndFrameworks from "./toolsAndFrameworks";

function MySkills() {
    
  return (
    <Container className="content">
     <div className="row card m-3">
       <div className="col-sm-12 box">
              <div className="row">
                 <ProgrammingSkills />
                 <br></br>
                 <ToolsAndFrameworks />

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default MySkills;
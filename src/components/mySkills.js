import React, {useState} from "react";
import { Container } from "react-bootstrap";
import ProgrammingSkills from "./programmingSkills";
import ToolsAndFrameworks from "./toolsAndFrameworks";

function MySkills() {
    
  return (
    <Container className="content">
     <div className="row">
       <div className="col-sm-12">
              <div className="row mb-3">
                 <ProgrammingSkills />
                 <ToolsAndFrameworks />

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default MySkills;
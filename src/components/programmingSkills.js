import React, { useState } from "react";
import { Container } from "react-bootstrap";

function ProgrammingSkills(props) {
  const [inputList, setinputList]= useState(props.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {skillName: "", skillLevel: ""}]);
  }
  return (
    <Container className="content">
     <div className="row m-3">
       <div className="col-sm-12">
           <h2>Skills</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="form-group row">
                
                 <div className="form-group col-md-4">
                 <label for={`skillName_${i}`} className="form-label">Skill Name: </label>
                  <input type="text" id={`skillName_${i}`} name="skillName" className="form-control"  placeholder="Enter Skill Name" onChange={ e=>handleinputchange(e,i)} value={x.skillName} required />
               </div>

               <div className="form-group col-md-4">
                 <label for={`skillLevel_${i}`} className="form-label">Level: </label>
                  <input type="number" id={`skillLevel_${i}`} name="skillLevel" className="form-control"  placeholder="Enter Skill Level" onChange={ e=>handleinputchange(e,i)} value={x.skillLevel} required />
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={(e)=> handleremove(e, i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success m-1" onClick={ handleaddclick}>Add More</button>
               }
               </div>
            </div>
              );
             } )} 

               
       </div>
     </div>
    </Container>
  );
}
export default ProgrammingSkills;
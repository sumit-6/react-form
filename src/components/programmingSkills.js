import React, { useState } from "react";
import { Container } from "react-bootstrap";

function ProgrammingSkills(props) {
  const [inputList, setinputList]= useState(props.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    props.onChange(name, value, index);
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    props.onRemove(index);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {skillName: "", skillLevel: ""}]);
    props.onObjChange('programmingSkills', [...inputList, {skillName: "", skillLevel: ""}]);
  }
  const skillLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <Container className="content">
     <div className="row m-3">
       <div className="col-sm-12">
           <h2>Skills</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                
                 <div className="form-group col-md-4">
                 <label htmlFor={`skillName_${i}`} className="form-label">Programming Language*: </label>
                  <input type="text" id={`skillName_${i}`} name="skillName" className="form-control"  placeholder="Enter skill name" onChange={ e=>handleinputchange(e,i)} value={x.skillName} required />
                  <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-4">
               <label htmlFor={`skillLevel_${i}`} className="form-label">Level*: </label>
                  <select id={`skillLevel_${i}`} name="skillLevel" className="form-control" onChange={ e=>handleinputchange(e,i)} value={x.skillLevel} required >
                    <option value="">Skill Level Options</option>
                    {skillLevelOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="valid-feedback">Looks Good</div>
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={(e)=> handleremove(e, i)}>Remove Skill</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success m-1" onClick={ handleaddclick}>Add More Skills</button>
               }
               </div>
               {
                inputList.length-1 !== i &&
                <hr className="col-md-12" style={{padding: '1rem'}}></hr>
               }
            </div>
              );
             } )} 

               
       </div>
     </div>
    </Container>
  );
}
export default ProgrammingSkills;
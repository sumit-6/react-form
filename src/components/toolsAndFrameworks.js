import React, { useState } from "react";
import { Container } from "react-bootstrap";

function ToolsAndFrameworks(props) {
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
    setinputList([...inputList, {toolName: "", toolLevel: ""}]);
    props.onObjChange('toolsAndFrameworks', [...inputList, {toolName: "", toolLevel: ""}]);
  }
  const toolLevelOptions = ["Expert", "Intermediate", "Beginner"];
  return (
    <Container className="content">
     <div className="row m-3">
       <div className="col-sm-12 box pt-3">
       <h2>Tools And Frameworks</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label for={`toolName_${i}`} className="form-label">Tool Name: </label>
                  <input type="text" id={`toolName_${i}`} name="toolName" className="form-control"  placeholder="Enter Tool Name" onChange={ e=>handleinputchange(e,i)} value={inputList[i].toolName} required />
               </div>

               <div className="form-group col-md-4">
               <label htmlFor={`toolLevel_${i}`} className="form-label">Level: </label>
                  <select id={`toolLevel_${i}`} name="toolLevel" className="form-control" onChange={ e=>handleinputchange(e,i)} value={inputList[i].toolLevel} required >
                    <option value="">Select Skill Level</option>
                    {toolLevelOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
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
export default ToolsAndFrameworks;
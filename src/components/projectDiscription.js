import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function ProjectDescription(props) {
  const [inputList, setinputList]= useState([""]);
  useEffect(() => {
    const list = props.description || [""]; // initialize the inputList with the workDescriptionList from props or with an empty string
    setinputList(list);
  }, [props.description]);
  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);
    props.onChange(list, props.index);
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    props.onRemove(list, index, props.index)
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
  }
  return (
    <Container className="content">
     <div className="row card m-3">
       <div className="col-sm-12 box">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row" key={`projectDescription-${props.index}-${i}`}>
                 <div className="form-group col-md-4">
                 <label >Enter Description: </label>
                  <textarea type="text"  name={"projectDescription"+"_"+props.index} className="form-control"  placeholder="Enter Description" onChange={ e=>handleinputchange(e,i)} rows="4" cols="40" value={x} />
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
export default ProjectDescription;
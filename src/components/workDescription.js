import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function WorkDescription(props) {
  const [inputList, setinputList]= useState(props.data);

  useEffect(() => {
    const list = props.workDescription || [""]; // initialize the inputList with the workDescriptionList from props or with an empty string
    setinputList(list);
  }, [props.workDescription]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);
    props.onChange(list, props.index);
  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=inputList.filter((value, ind) => {
      return index !== ind;
    });
    setinputList(list);
    props.onRemove(list, index, props.index);
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
              <div className="row" key={`workDescription-${props.index}-${i}`}>
                
                 <div className="form-group col-md-4">
                 <label for={`workDescription_${props.index}_${i}`} className="form-label">Enter Description: </label>
                  <textarea type="text" id={`workDescription_${props.index}_${i}`} name={"workDescription"+"_"+props.index} className="form-control"  placeholder="Enter Description" onChange={ e=>handleinputchange(e,i)} rows="4" cols="40" value={x} required></textarea>
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={(e)=> {
                    handleremove(e, i);
                  }}>Remove</button>
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
export default WorkDescription;
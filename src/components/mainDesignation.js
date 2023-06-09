import React, { useState } from "react";
import { Container } from "react-bootstrap";

function MainDesignation(props) {
  const [inputList, setinputList]= useState(props.mainDesignations);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);

  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    let list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
  }
  return (
    <Container className="content">
     <div className="row card m-3 box">
       <div className="col-sm-12 box">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                 <div className="form-group col-md-4">
                  <label htmlFor={`mainDesignation_` + i} className="form-label">Designation*: </label>
                  <input type="text" id={`mainDesignation_`+i} name="mainDesignations" className="form-control"  placeholder="Full Stack Developer/Coder/App Developer/..." onChange={ e=>handleinputchange(e,i)} value={inputList[i]} required />
                  <div className="valid-feedback">Looks Good</div>
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button className="btn btn-danger mx-1" onClick={(e)=> handleremove(e, i)}>Remove Designation</button>
               }
               { inputList.length-1===i &&
               <button className="btn btn-success m-1" onClick={ handleaddclick}>Add More Designations</button>
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
export default MainDesignation;
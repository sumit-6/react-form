import React, { useState } from "react";
import { Container } from "react-bootstrap";

function MyAchievements() {
  const [inputList, setinputList]= useState([""]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
  }
  return (
    <Container className="content">
     <div className="row">
       <div className="col-sm-12">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label >Achievement: </label>
                  <input type="text"  name="myAchievements" className="form-control"  placeholder="Enter Achievement" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
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
export default MyAchievements;
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function MyAchievements(props) {
  const [inputList, setinputList]= useState(props.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index]= value;
    setinputList(list);

  }
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, ""]);
  }
  return (
    <Container className="content m-3">
      
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box pt-3">
           <h2>Achievements</h2>
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                 <div className="form-group col-md-4">
                 <label for={`myAchievements_${i}`} className="form-label">Achievement: </label>
                  <textarea type="text" id={`myAchievements_${i}`} name="myAchievements" className="form-control"  placeholder="Enter Achievement" onChange={ e=>handleinputchange(e,i)} rows="4" cols="40" value={x} required/>
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
export default MyAchievements;
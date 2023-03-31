import React, { useState } from "react";
import { Container } from "react-bootstrap";

function MyEducation() {
  const [inputList, setinputList]= useState([{institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]);
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
                 <label >Institution Name: </label>
                  <input type="text"  name="institutionName" className="form-control"  placeholder="Enter Institution" onChange={ e=>handleinputchange(e,i)} />
               </div>
               
               
                 <div className="form-group col-md-4">
                 <label >Year: </label>
                  <input type="number"  name="year" className="form-control"  placeholder="Enter end year" onChange={ e=>handleinputchange(e,i)} />
               </div>

       
                 <div className="form-group col-md-4">
                 <label >Place: </label>
                  <input type="text"  name="place" className="form-control"  placeholder="Enter place" onChange={ e=>handleinputchange(e,i)} />
               </div>

               
                 <div className="form-group col-md-4">
                 <label >Aggregate: </label>
                  <input type="number"  name="aggregate" className="form-control"  placeholder="Enter aggregate" onChange={ e=>handleinputchange(e,i)} />
               </div>

               
                 <div className="form-group col-md-4">
                 <label >Course Pursuied: </label>
                  <input type="text"  name="coursePursuied" className="form-control"  placeholder="Enter courage pursuied" onChange={ e=>handleinputchange(e,i)} />
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
            })}

               
       </div>
     </div>
    </Container>
  );
}
export default MyEducation;
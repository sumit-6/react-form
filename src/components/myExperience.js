import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Duration from "./duration";
import WorkDescription from "./workDescription";

function MyExperience(props) {
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

  const handleWorkDescriptionChange = (value, index) => {
    const list = [...inputList];
    list[index].workDescription = value;
    setinputList(list);
  };

  const handleWorkDescriptionDelete = (value, index, ind) => {
    const list = [...inputList];
    list[ind]['workDescription'].splice(index, 1);
    setinputList(list);
  };

  const handleDurationChange = (value, index) => {
    const list = [...inputList];
    list[index].duration = value;
    console.log(index);
    setinputList(list);
  };

  const handleaddclick=()=>{ 
    setinputList([...inputList, {role: "", company: "", certificate: "", workDescription: [""], duration: {start: "", end: ""}}]);
  }
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box pt-3">
       <h2>Experience</h2>
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                
                 <div className="form-group col-md-4">
                 <label htmlFor={`role_${i}`} className="form-label">Role: </label>
                  <input type="text" id={`role_${i}`} name="role" className="form-control"  placeholder="Enter Role" onChange={ e=>handleinputchange(e,i)} value={inputList[i].role} required />
                  <div className="valid-feedback">Looks Good</div>
               </div>
               
               
                 <div className="form-group col-md-4">
                 <label htmlFor={`company_${i}`} className="form-label">Company: </label>
                  <input type="text" id={`company_${i}`} name="company" className="form-control"  placeholder="Enter Company Name" onChange={ e=>handleinputchange(e,i)} value={inputList[i].company} required />
                  <div className="valid-feedback">Looks Good</div>
               </div>

               <WorkDescription index={i} workDescription={x.workDescription}
                onChange={handleWorkDescriptionChange} onRemove={handleWorkDescriptionDelete} data={x.workDescription}/>
                
                 <div className="form-group col-md-4">
                 <label htmlFor={`certificate_${i}`} className="form-label">Certificate Url: </label>
                  <input type="text" id={`certificate_${i}`}  name="certificate" className="form-control"  placeholder="Enter Certficate URL" onChange={ e=>handleinputchange(e,i)} value={inputList[i].certificate} />
                  <div className="valid-feedback">Looks Good</div>
               </div>

               
                <Duration index={i} duration={x.duration} onChange={handleDurationChange} data={x.duration}/>
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
            })}

               
       </div>
     </div>
    </Container>
  );
}
export default MyExperience;
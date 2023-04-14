import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProjectDescription from "./projectDiscription";

function MyProjects(props) {
  const [inputList, setinputList]= useState(props.data);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
  }

  const handleProjectDescriptionChange = (value, index) => {
    const list = [...inputList];
    list[index].description = value;
    setinputList(list);
  };

  const handleProjectDescriptionDelete = (value, index, ind) => {
    const list = [...inputList];
    list[ind]['description'].splice(index, 1);
    setinputList(list);
  };
 
  const handleremove= (event, index)=>{
    event.preventDefault();
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, {projectName: "", gitHubLink: "", projectLink: "", description: [""]}]);
  }
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box pt-3">
       <h2>Projects</h2>
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row">
                
                 <div className="form-group col-md-4">
                 <label htmlFor={`projectName_${i}`} className="form-label">Project Name: </label>
                  <input type="text" id={`projectName_${i}`} name="projectName" className="form-control"  placeholder="Enter project name" onChange={ e=>handleinputchange(e,i)} value={x.projectName} required />
                  <div className="valid-feedback">Looks Good</div>
               </div>
               
               
                 <div className="form-group col-md-4">
                 <label htmlFor={`githubLink_${i}`} className="form-label">Github Link: </label>
                  <input type="text" id={`githubLink_${i}`} name="gitHubLink" className="form-control"  placeholder="Enter github link" onChange={ e=>handleinputchange(e,i)} value={x.gitHubLink} />
                  <div className="valid-feedback">Looks Good</div>
               </div>

               <ProjectDescription index={i} description={x.description} onChange={handleProjectDescriptionChange} onRemove={handleProjectDescriptionDelete} data={x.description} />
                
                 <div className="form-group col-md-4">
                 <label htmlFor={`projectLink_${i}`} className="form-label">Project Link: </label>
                  <input type="text" id={`projectLink_${i}`} name="projectLink" className="form-control"  placeholder="Enter project url" onChange={ e=>handleinputchange(e,i)} value={x.projectLink} />
                  <div className="valid-feedback">Looks Good</div>
               </div>

               <div className="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={(e)=> handleremove(e, i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success m-1" onClick={ handleaddclick}>Add More Projects</button>
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
export default MyProjects;
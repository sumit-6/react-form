import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProgrammingSkills from "./programmingSkills";
import ToolsAndFrameworks from "./toolsAndFrameworks";

function MySkills(props) {
  const [inputObj, setInputObj] = useState(props.data);
  const handleProgrammingSkills = (name, value, index) => {
    const obj = {...inputObj};
    obj['programmingSkills'][index][name] = value;
    setInputObj(obj);
  };

  const handleProgrammingSkillsRemove = (index) => {
    const obj = {...inputObj};
    obj['programmingSkills'].splice(index, 1);
    setInputObj(obj);
  };

  const handleToolsAndFramework = (name, value, index) => {
    const obj = {...inputObj};
    obj['toolsAndFrameworks'][index][name] = value;
    setInputObj(obj);
  };

  const handleToolsAndFrameworkRemove = (index) => {
    const obj = {...inputObj};
    obj['toolsAndFrameworks'].splice(index, 1);
    setInputObj(obj);
  };

  const handleObjChange = (name, list) => {
    const obj = {...inputObj};
    obj[name] = list;
    setInputObj(obj);
  }
  return (
    <Container className="content m-3">
     <div className="row card shadow-lg bg-body rounded">
       <div className="col-sm-12 box">
              <div className="row">
                 <ProgrammingSkills data={props.data.programmingSkills} onChange={handleProgrammingSkills} onRemove={handleProgrammingSkillsRemove} onObjChange={handleObjChange}/>
                 <br></br>
                 <ToolsAndFrameworks data={props.data.toolsAndFrameworks} onChange={handleToolsAndFramework} onRemove={handleToolsAndFrameworkRemove} onObjChange={handleObjChange} />

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default MySkills;
import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function Duration(props) {
    const [inputObj, setinputObj]= useState(props.data);

    useEffect(() => {
      const list = props.duration || {start: "", end: ""}; // initialize the inputList with the workDescriptionList from props or with an empty string
      setinputObj(list);
    }, [props.duration]);
    const handleinputchange=(e)=>{
      const {name, value} = e.target;
      const obj = {...inputObj};
      obj[name] = value;
      setinputObj(obj);
      props.onChange(obj, props.index);
    }
  return (
    <Container className="content">
     <div className="row">
       <div className="col-sm-12">
              <div className="row mb-3" key={`duration-${props.index}`}>
                 <div className="form-group col-md-4">
                 <label for={`start_${props.index}`} className="form-label">Start: </label>
                  <input type="text" id={`start_${props.index}`}  name="start" className="form-control"  placeholder="Enter Start Date" onChange={(e)=> handleinputchange(e)} value={props.duration.start} required />
               </div>
               
               <div className="form-group col-md-4">
                <label for={`end_${props.index}`} className="form-label">End: </label>
                <input type="text" id={`end_${props.index}`} name="end" className="form-control" placeholder="Enter End Date" onChange={(e)=> handleinputchange(e)} value={props.duration.end} required />
               </div>

               </div>
            </div>

               
       </div>
    </Container>
  );
}
export default Duration;
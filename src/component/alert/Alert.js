import React from "react";
import './alert.css';

const Alert= (props)=>{

  const handlleClose=()=>{
    props.danger===true?(props.updateErrorStateFunction("")):(props.updateSucessStateFunction(""));
  }

  return (
    props.danger===false?(<div className="alert alert-success alert-white rounded">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={handlleClose}>×</button>
                            <div className="icon"><i className="fa fa-check"></i></div>
                            <strong>Message sent! </strong>{props.message}
                            </div>):
                            (<div className="alert alert-danger alert-white rounded">
                              <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={handlleClose}>×</button>
                              <div className="icon"><i className="fa fa-times-circle"></i></div>
                              <strong>Error! </strong>{props.message}
                            </div>)
  );
}

export default Alert;
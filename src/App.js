import "./App.css";
import UserForm from "./UserForm";
import Dispalylist from "./DisplayLlist";
import { useState } from "react";

function App() {
  const [name, setName] = useState([]);
  //let data = {};
  //const [newEditName, setNewEditName] = useState({});
  //This addName function we call props uplifting from child to parent
  // which we pass fuction to execute in children and pass data back to
  // parent and parent pass this data to another children
  const addName = (newName) => {
    //console.log(newName);
    setName([...name, newName]);
  };
  const deleteName = (indexRow) => {
    const result = window.confirm("Are you sure do you want to delete?");
    if (result) setName(name.filter((_, index) => index !== indexRow));
  };

  // const editName = (indexRow, indexName) => {
  //   data = { indexRow, indexName };
  //   //setNewEditName(name.filter((_, index) => index === indexRow));
  //   //console.log(data);
  // };
  return (
    <div className="container text-center mt-5" style={{ maxWidth: "400px" }}>
      <UserForm addName={addName}></UserForm>
      <Dispalylist name={name} deleteName={deleteName} />
    </div>
  );
}

export default App;

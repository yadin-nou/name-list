import "./App.css";
import UserForm from "./UserForm";
import Dispalylist from "./DisplayLlist";
import { useState } from "react";

function App() {
  const [name, setName] = useState([]);

  //This addName function we call props uplifting from child to parent
  // which we pass fuction to execute in children and pass data back to
  // parent and parent pass this data to another children
  const addName = (e, newName) => {
    e.preventDefault();
    console.log(newName);
    setName([...name, newName]);
  };

  return (
    <div className="container text-center mt-5" style={{ maxWidth: "400px" }}>
      <UserForm addName={addName}></UserForm>
      <Dispalylist name={name} />
    </div>
  );
}

export default App;

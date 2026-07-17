import { useRef, useState } from "react";
import ShowName from "./ShowName";
import Dispalylist from "./DisplayLlist";

const UserForm = () => {
  //const nameRef = useRef(null);
  // const labelRef = useRef(null);
  const [name, setName] = useState([]);
  const [showName, setshowName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    setName([...name, showName]);
    // nameRef.current.value = "";
  };

  const DipslayName = (e) => {
    setshowName(e.target.value);
  };
  return (
    <div>
      <form action="" className="card p-3 shadow-lg">
        <div className="mb-3">
          <ShowName name={showName}></ShowName>
          <input
            type="text"
            placeholder="Input Name"
            className="form-control mt-2"
            onChange={DipslayName}
          />
        </div>

        <button className="btn btn-primary" onClick={addName}>
          Add
        </button>
      </form>
      <Dispalylist name={name} />
    </div>
  );
};

export default UserForm;

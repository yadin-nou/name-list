import ShowName from "./ShowName";
import { useState } from "react";

const UserForm = ({ addName }) => {
  const [showName, setshowName] = useState("");

  // THis function we call props drilling to children by passing data to chidlren
  const DipslayName = (e) => {
    setshowName(e.target.value);
  };
  //This function create for call addName function from parent which have
  //which is execute onClick event.
  const addListHandle = (e) => {
    e.preventDefault();
    addName(showName);
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

        <button className="btn btn-primary" onClick={addListHandle}>
          Add
        </button>
      </form>
    </div>
  );
};

export default UserForm;

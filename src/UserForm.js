import { useRef, useState } from "react";

const UserForm = () => {
  const nameRef = useRef(null);
  const labelRef = useRef(null);
  const [name, setName] = useState([]);
  const DipslayName = (e) => {
    //setName(e.target.value);
    labelRef.current.textContent = nameRef.current.value;
    //console.log(labelRef);
  };
  const addName = (e) => {
    e.preventDefault();
    setName([...name, nameRef.current.value]);
  };

  return (
    <div>
      <form action="" className="card p-3 shadow-lg">
        <div className="mb-3">
          <p htmlFor="Dipslayname" ref={labelRef}></p>
          <input
            type="text"
            placeholder="Input Name"
            className="form-control mt-2"
            onChange={DipslayName}
            ref={nameRef}
          />
        </div>

        <button className="btn btn-primary" onClick={addName}>
          Add
        </button>
      </form>

      <div className="border text-start ps-2"></div>
      <table className="table table-striped table-hover">
        <tbody>
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
          {name.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;

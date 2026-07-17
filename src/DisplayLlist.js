const Dispalylist = ({ name, deleteName, editName }) => {
  const deleteList = (e, index) => {
    e.preventDefault();
    deleteName(index);
  };

  const editList = (e, index, item) => {
    e.preventDefault();
    editName(index, item);
  };
  return (
    <>
      <table className="table table-striped table-hover shadow-5">
        <tbody>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          {name.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <span>
                  <a href="#" onClick={(e) => deleteList(e, index)}>
                    Delete
                  </a>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dispalylist;

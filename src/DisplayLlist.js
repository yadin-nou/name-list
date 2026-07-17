const Dispalylist = ({ name }) => {
  return (
    <>
      <table className="table table-striped table-hover shadow-5">
        <tbody>
          <tr>
            <th>Number</th>
            <th>Name</th>
          </tr>
          {name.map((item, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dispalylist;

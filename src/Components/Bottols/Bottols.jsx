import React, { use } from "react";
import Bottol from "../Bottol/Bottol";

const Bottols = ({ bottolsPromised }) => {
  const bottols = use(bottolsPromised);
  console.log(bottols);
  return (
    <div>
      <h3>Total Bottols :{bottols.length}</h3>
      <div>
        {bottols.map((bottol) => (
          <Bottol key={bottol.id} bottol={bottol}></Bottol>
        ))}
      </div>
    </div>
  );
};

export default Bottols;

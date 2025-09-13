import React from "react";
import { useParams } from "react-router";

const EditBrand = () => {
  const params = useParams();

  console.log(params);
  return (
    <main>
      <h1>Edit</h1>
    </main>
  );
};

export default EditBrand;

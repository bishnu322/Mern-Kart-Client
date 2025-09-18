import React from "react";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const params = useParams();

  console.log({ params });
  return <div>UpdateProduct</div>;
};

export default UpdateProduct;

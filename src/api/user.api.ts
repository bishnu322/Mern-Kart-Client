import api from "./index";

//* fetching all users
export const getAllUser = async () => {
  const response = await api.get("/user");

  console.log(response.data);

  return response.data;
};

//* remove user

export const removeUser = async (id?: string) => {
  const response = await api.delete(`/user/${id}`);

  console.log(response.data);

  return response.data;
};

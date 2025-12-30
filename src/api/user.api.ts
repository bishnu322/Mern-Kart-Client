import api from "./index";

//* fetching all users
export const getAllUser = async () => {
  const response = await api.get("/user");
  return response.data;
};

//* remove user

export const removeUser = async (id?: string) => {
  const response = await api.delete(`/user/${id}`);

  return response.data;
};

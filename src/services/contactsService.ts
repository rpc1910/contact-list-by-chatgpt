import axios from "axios";

const baseURL = "https://dummyjson.com/users/search";

const fetchContacts = async (
  currentPage: number,
  itemsPerPage: number,
  searchQuery: string = ""
) => {
  const skip = (currentPage - 1) * itemsPerPage;
  const response = await axios.get(
    `${baseURL}?limit=${itemsPerPage}&skip=${skip}&q=${searchQuery}`
  );
  return response.data;
};

export default fetchContacts;

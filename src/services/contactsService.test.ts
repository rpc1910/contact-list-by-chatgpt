import axios from "axios";
import fetchContacts from "./contactsService";

jest.mock("axios");

describe("fetchContacts", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockData = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
      },
    ],
    total: 1,
  };

  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("should fetch contacts from API", async () => {
    const currentPage = 1;
    const itemsPerPage = 20;
    const searchTerm = "";
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchContacts(currentPage, itemsPerPage, searchTerm);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://dummyjson.com/users/search?limit=${itemsPerPage}&skip=0&q=${searchTerm}`
    );
    expect(result).toEqual(mockData);
  });

  it("should handle errors when fetching contacts", async () => {
    const currentPage = 1;
    const itemsPerPage = 20;
    const searchTerm = "";
    const errorMessage = "Network Error";
    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(
      fetchContacts(currentPage, itemsPerPage, searchTerm)
    ).rejects.toThrow(errorMessage);
  });
});

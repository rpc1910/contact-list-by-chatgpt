import { useEffect, useState } from "react";
import ContactsList, { Contact } from "../components/ContactsList/ContactsList";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import Loader from "../components/Loader/Loader";
import fetchContacts from "../services/contactsService";
import debounce from "lodash/debounce";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchContacts(currentPage, itemsPerPage, searchTerm);
      setContacts(data.users);
      setIsLoading(false);
      setTotal(data.total);
    };
    fetchData();
  }, [currentPage, itemsPerPage, searchTerm]);

  const debouncedSearchTerm = debounce(setSearchTerm, 500);

  const handleSearch = async (value: string) => {
    debouncedSearchTerm(value);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContactsList contacts={contacts} />
          {total > 0 && (
            <Pagination
              totalItems={total}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;

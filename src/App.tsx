import { Header, HeroHeader, CustomersList, Filters, SearchResults } from './components';
import { useEffect, useState } from 'react';
import { useGetCustomers } from './hooks';
import { ICustomer, IFilters } from './models';
import searchedCustomers from './utils/searchEngine';
import './styles/global.scss';
import "./styles/reset.scss";

const App = (): JSX.Element => {
  const customers: ICustomer[] = useGetCustomers()

  const [customersFiltered, setCustomersFiltered] = useState<ICustomer[]>([])
  const [filters, setFilters] = useState<IFilters>({})

  const handleChangeFilters = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => (
    setCustomersFiltered(customers)
  ), [customers]);

  return (
    <>
      <Header />
      <HeroHeader title="My agency" description="Search your clients" />
      <Filters handleChange={handleChangeFilters}>
        <SearchResults searchingCustomers={searchedCustomers(customersFiltered, filters)} allCustomers={customers} />
      </Filters>
      <CustomersList customers={searchedCustomers(customersFiltered, filters)} />
    </>
  );
};

export default App;

import { useEffect, useState } from 'react';
import { ICustomer } from '../models';

export const useGetCustomers = (): ICustomer[] => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    fetch('./customers.json')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error(error))
  }, []);

  return customers;
};
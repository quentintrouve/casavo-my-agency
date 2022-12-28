interface ICustomerSearch {
  area: number, 
  budget: number, 
  rooms: number
};

export interface ICustomer {
  id: string,
  lastName: string,
  firstName: string,
  phone: string,
  email: string,
  search: ICustomerSearch
};
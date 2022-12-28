import { ICustomer, IFilters, TSearchingEntity } from '../models';
import { makeInsensitiveString } from '../utils';


const searchNameProcess = (searchingName: string, list:ICustomer[]):ICustomer[] => {
  const searchList = list.filter(item => {
    const normalizeItem = makeInsensitiveString(`${item.lastName}${item.firstName}`)
    return normalizeItem.includes(searchingName)
  });

  return searchList;
};

const searchMinProcess = (searchingBudgetMin: string, type: TSearchingEntity, list:ICustomer[]):ICustomer[] => {
  const searchList = list.filter(item => {
    type ObjectKey = keyof typeof item.search;
    const key = type as ObjectKey;

    return item.search[key] >= parseInt(searchingBudgetMin);
  });

  return searchList;
};

const searchMaxProcess = (searchingBudgetMax: string, type: TSearchingEntity, list:ICustomer[]):ICustomer[] => {
  const searchList = list.filter(item => {
    type ObjectKey = keyof typeof item.search;
    const key = type as ObjectKey;

    return item.search[key] <= parseInt(searchingBudgetMax);
  });

  return searchList;
};

const searchRoomsProcess = (searchingRooms: string, list:ICustomer[]):ICustomer[] => {
  const searchList = list.filter(item => {
    return item.search.rooms === parseInt(searchingRooms);
  });

  return searchList;
};

export default function searchedCustomers (clients:ICustomer[], filters:IFilters):ICustomer[] {
  let newList:ICustomer[] = [...clients];

  if(filters.name) {
    newList = searchNameProcess(filters.name, newList);
  };

  if(filters.budgetMin) {
    newList = searchMinProcess(filters.budgetMin, "budget", newList);
  };
  
  if(filters.budgetMax) {
    newList = searchMaxProcess(filters.budgetMax, "budget", newList);
  };
  
  if(filters.areaMin) {
    newList = searchMinProcess(filters.areaMin, "area", newList);
  };
  
  if(filters.areaMax) {
    newList = searchMaxProcess(filters.areaMax, "area", newList);
  };
  
  if(filters.rooms) {
    newList = searchRoomsProcess(filters.rooms, newList);
  };

  return newList;
};
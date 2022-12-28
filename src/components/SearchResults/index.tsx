import { ICustomer } from '../../models';
import s from './styles.module.scss';

interface ISearchResultsProps {
  searchingCustomers: ICustomer[],
  allCustomers: ICustomer[],
};

export const SearchResults = ({searchingCustomers, allCustomers}: ISearchResultsProps): JSX.Element => {
  return (
    <h5 className={s.searchResults}>Results: {`${searchingCustomers.length}/${allCustomers.length}`}</h5>
  );
};
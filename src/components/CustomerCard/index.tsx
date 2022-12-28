import { ICustomer } from '../../models';
import s from './styles.module.scss';

interface ICustomerCardProps {
  customer: ICustomer
};

export const CustomerCard = ({customer}: ICustomerCardProps): JSX.Element => {
  return (
    <li className={s.customerCard}>
      <h4 className={s.customerCard__name}>{customer.lastName} {customer.firstName}</h4>
      <h5 className={s.customerCard__id}>{customer.id}</h5>
      
      <ul className={s.customerCard__section}>
        <span>Informations:</span>
        <li>Email: {customer.email}</li>
        <li>Phone: {customer.phone}</li>
      </ul>

      <ul className={s.customerCard__section}>
        <span>Search:</span> 
        <li>Area: {customer.search.area}</li>
        <li>Rooms: {customer.search.rooms}</li>
        <li>Budget: {customer.search.budget}</li>
      </ul>
    </li>
  );
};
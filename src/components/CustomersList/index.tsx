import { CustomerCard, ContentEmpty } from '../../components';
import { ICustomer } from '../../models';
import s from './styles.module.scss';

interface ICustomersListProps {
  customers?: ICustomer[]
};

export const CustomersList = ({customers}: ICustomersListProps): JSX.Element => {

  return (
    <div className={s.customersList}>
      {customers && customers.length > 0 ? 
        <ol className={s.customersList__grid}>
          {customers.map(customer => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </ol>
      : 
        <ContentEmpty />
      }
    </div>
  );
};
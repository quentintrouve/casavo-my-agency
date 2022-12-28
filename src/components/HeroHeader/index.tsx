import s from './styles.module.scss';
import customersImg from '../../assets/images/customers.svg';

interface IHeroHeaderProps {
  title: string,
  description: string
};

export const HeroHeader = ({title, description}: IHeroHeaderProps): JSX.Element => {
  return (
    <div className={s.hero}>
      <div className={s.hero__container}>
        <div className={s.hero__contentText}>
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
        <div className={s.hero__contentImg}>
          <img src={customersImg} alt="Customers bicycling"/>
        </div>
      </div>
    </div>
  );
};
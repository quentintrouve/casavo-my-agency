import s from './styles.module.scss';
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header className={s.header}>
      <Logo />
    </header>
  );
};
import s from './styles.module.scss';

export const ContentEmpty = (): JSX.Element => {
  return (
    <p className={s.contentEmpty}>No results</p>
  );
};
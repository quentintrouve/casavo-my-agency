import React from 'react';
import s from './styles.module.scss';

interface IInputTextProps {
  label: string,
  placeholder: string,
  name: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputText = ({label, placeholder, name, handleChange}: IInputTextProps): JSX.Element => {
  return (
    <div className={s.inputText}>
      <label className={s.inputText__label}>{label}</label>
      <input 
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        className={s.inputText__input}
      />
    </div>
  );
};
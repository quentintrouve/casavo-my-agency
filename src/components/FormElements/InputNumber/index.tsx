import React from 'react';
import { DEFAULT_MIN_INPUT } from '../../../utils';
import s from './styles.module.scss';

interface IInputNumberProps {
  label: string,
  placeholder: string
  name: string,
  step: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputNumber = ({
  label, 
  placeholder, 
  name, 
  step, 
  handleChange}: IInputNumberProps
  ): JSX.Element => {

  return (
    <div className={s.inputNumber}>
      <label className={s.inputNumber__label}>{label}</label>
      <input 
        type="number"
        name={name}
        placeholder={placeholder}
        min={DEFAULT_MIN_INPUT}
        step={step}
        onChange={(e) => handleChange(e)}
        className={s.inputNumber__input}
      />
    </div>
  );
};
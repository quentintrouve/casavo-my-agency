import React from 'react';
import { DEFAULT_MIN_INPUT } from '../../../utils';
import s from './styles.module.scss';

interface IInputMinMaxProps {
  label: string,
  placeholderMin: string,
  placeholderMax: string
  nameMin: string,
  nameMax: string,
  step: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputMinMax = ({
  label, 
  placeholderMin,
  placeholderMax,
  nameMin, 
  nameMax,  
  step, 
  handleChange}: IInputMinMaxProps
  ): JSX.Element => {

  return (
    <div className={s.inputMinMax}>
      <label className={s.inputMinMax__label}>{label}</label>
      <fieldset className={s.inputMinMax__inputsContainer}>
        <input 
            type="number"
            name={nameMin}
            placeholder={placeholderMin}
            min={DEFAULT_MIN_INPUT}
            step={step}
            onChange={(e) => handleChange(e)}
            className={s.inputMinMax__input}
          />
          <input 
            type="number"
            name={nameMax}
            placeholder={placeholderMax}
            min={DEFAULT_MIN_INPUT}
            step={step}
            onChange={(e) => handleChange(e)}
            className={s.inputMinMax__input}
          />
      </fieldset>
    </div>
  );
};
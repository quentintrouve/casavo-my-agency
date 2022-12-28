import React from 'react';
import { InputText, InputMinMax, InputNumber} from '../../components';
import { STEP_BUDGET_INPUT, STEP_AREA_INPUT, STEP_ROOMS_INPUT } from '../../utils';
import s from './styles.module.scss';


interface IFiltersProps {
  children: JSX.Element,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const Filters = ({ children, handleChange }: IFiltersProps): JSX.Element => {
  return (
    <div className={s.stickyWrapper}>
      <div className={s.filters}>
        <InputText 
          label="Customer" 
          placeholder="Firstname and Lastname"
          name="name" 
          handleChange={handleChange} 
        />

        <InputMinMax
          label="Budget"
          placeholderMin="Budget min"
          placeholderMax="Budget max"
          nameMin="budgetMin" 
          nameMax="budgetMax" 
          step={STEP_BUDGET_INPUT}
          handleChange={handleChange} 
        />

        <InputMinMax 
          label="Area"
          placeholderMin="Area min"
          placeholderMax="Area max"
          nameMin="areaMin" 
          nameMax="areaMax" 
          step={STEP_AREA_INPUT} 
          handleChange={handleChange} 
        />

        <InputNumber 
          label="Rooms" 
          placeholder="Rooms"
          name="rooms" 
          step={STEP_ROOMS_INPUT}
          handleChange={handleChange} 
        />
      </div>
      <>
        {children}
      </>
    </div>
  );
};
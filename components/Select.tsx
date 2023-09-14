import {Select} from 'native-base';
import React from 'react';
import {Continent, Country} from '../types';

interface ISelectProps {
  placeholder: string;
  data: Continent[] | Country[];
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

const SelectComponent = ({
  placeholder,
  data,
  selectedValue,
  onValueChange,
}: ISelectProps) => {
  return (
    <Select
      placeholder={placeholder}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {data.map((item: Continent | Country) => (
        <Select.Item key={item.code} label={item.name} value={item.code} />
      ))}
    </Select>
  );
};

export default SelectComponent;

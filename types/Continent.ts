import {Country} from './Country';

export type Continent = {
  code: string;
  countries: [Country];
  name: string;
};

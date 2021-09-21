import { Customer } from 'src/app/models/entities/Customer';
import { MOCK_PEOPLE } from './mock-people.datasource';

export const MOCK_CUSTOMERS: Partial<Customer>[] = [
  {
    person: MOCK_PEOPLE[9]
  },
  {
    person: MOCK_PEOPLE[10]
  },
  {
    person: MOCK_PEOPLE[11]
  },
  {
    person: MOCK_PEOPLE[12]
  }
];

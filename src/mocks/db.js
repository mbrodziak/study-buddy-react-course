import { factory, primaryKey } from '@mswjs/data';
import faker, { datatype } from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomValue = (array, index) => array[index];
const getRandomAverange = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverange,
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    grades: () => [
      {
        subject: 'Buisness Philosophy',
        average: getRandomAverange(),
      },
      {
        subject: 'Marketing',
        average: getRandomAverange(),
      },
      {
        subject: 'Modern Economy',
        average: getRandomAverange(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(datatype.uuid),
    type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
});

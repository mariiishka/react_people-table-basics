// eslint-disable-next-line max-len
const BASE_URL = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeople = () => (
  fetch(BASE_URL)
    .then(data => data.json())
);
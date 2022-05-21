import { fitsh } from 'fitsh';

const api = fitsh('https://sofia-ieuw-backend.herokuapp.com');

export default function request(url) {
  return api(url);
}

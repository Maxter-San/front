import { fitsh } from 'fitsh';

const api = fitsh('http://localhost:3000');

export default function request(url) {
  return api(url);
}

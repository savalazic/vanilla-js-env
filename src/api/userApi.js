// @flow
import 'whatwg-fetch'; // polyfill

export function getUsers() {
  return get('users');
}

function get(url: string): Promise<*> {
  return fetch(url, {
    method: 'GET',
  }).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(err: string) {
  console.log(err);
}

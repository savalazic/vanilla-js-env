// @flow
import 'whatwg-fetch'; // polyfill
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

function onSuccess(res) {
  return res.json();
}

function onError(err: string) {
  console.log(err);
}

function get(url: string): Promise<*> {
  return fetch(baseUrl + url, {
    method: 'GET',
  }).then(onSuccess, onError);
}

function remove(url: string): Promise<*> {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  });
  return fetch(request).then(onSuccess, onError);
}

export function getUsers() {
  return get('users');
}

export function deleteUser(id: string) {
  return remove(`users/${id}`);
}

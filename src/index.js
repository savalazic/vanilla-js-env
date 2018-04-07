// @flow
import { getUsers } from './api/userApi';
import './index.css';

type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
};

getUsers().then(data => {
  let usersBody = (data || []).reduce((body, user: User) => {
    body += `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
  `;

    return body;
  }, '');

  global.document.getElementById('users').innerHTML = usersBody;
});

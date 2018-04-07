// @flow
import { getUsers, deleteUser } from './api/userApi';
import './index.css';

type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
};

getUsers().then(data => {
  const usersBody = (data || []).reduce((body, user: User) => {
    const userBody = `${body}
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `;

    return userBody;
  }, '');

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.querySelectorAll('.deleteUser');

  [...deleteLinks].forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const element = event.target;
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
  });
});

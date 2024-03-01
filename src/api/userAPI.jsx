import instance from "../api.js";


// export const userAPI = {
//   login: (username, password) =>
//     instance.post('/token', { username, password }).then((res) => res.data),
// };

export const userAPI = {
  login: () =>
    instance.get('/token/1').then((res) => res.data),
  getUsers: () =>
      instance.get('/users').then((res) => res.data),
};
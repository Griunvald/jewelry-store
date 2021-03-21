import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('test1234', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@mail.com',
    password: bcrypt.hashSync('test1234', 10),
  },
];

module.exports = users;

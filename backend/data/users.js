import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'admin user',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Normal user1',
    email: 'normal1@normal1.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Normal user2',
    email: 'normal2@normal2.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;

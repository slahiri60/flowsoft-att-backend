import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Soumitra Lahiri',
    email: 'soumitralahiri@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sujata Lahiri',
    email: 'sujatalahiri@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

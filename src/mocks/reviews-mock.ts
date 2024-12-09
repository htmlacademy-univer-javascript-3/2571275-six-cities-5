import {ReviewData} from '../models/api/review-data.ts';

const reviewsMock : ReviewData[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: new Date('2019-05-08T14:13:56.569Z'),
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 3,
  },

  {
    id: '8f552dfd-17bd-48f3-a125-e9507d9a1ac6',
    date: new Date('2019-06-11T20:45:12.437Z'),
    user: {
      name: 'Alina Conver',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment:
      'I love it! COOL!!!!!!!! A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 5,
  },
];

export default reviewsMock;

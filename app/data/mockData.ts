import {Product, Event} from '../types';
export const products: Product[] = [
  {
    id: '1',
    name: 'Маргарита',
    image:
      'https://pushinka.top/uploads/posts/2023-08/1693270863_pushinka-top-p-pitstsa-margarita-kartinki-vkontakte-3.png',
    category: 'итальянская',
    price: 7,
    countryFlag: '🇮🇹',
  },
  {
    id: '2',
    name: 'Пепперони',
    image:
      'https://kommunar.sushiokinava.ru/assets/images/products/45/pepperoni-sa.png',
    category: 'итальянская',
    price: 10,
    countryFlag: '🇮🇹',
  },
  {
    id: '3',
    name: 'Четыре сыра',
    image:
      'https://static.tildacdn.com/stor6433-6162-4661-a436-613034393365/32574685.png',
    category: 'итальянская',
    price: 11,
    countryFlag: '🇮🇹',
  },
  {
    id: '4',
    name: 'Гавайская',
    image:
      'https://static.tildacdn.com/tild3366-3433-4839-b836-363538306665/noroot.png',
    category: 'американская',
    price: 12,
    countryFlag: '🇺🇸',
  },
  {
    id: '5',
    name: 'Мексиканская',
    image:
      'https://avatars.mds.yandex.net/get-sprav-products/5560664/2a00000182828d8df79245a51606a06750ec/medium',
    category: 'мексиканская',
    price: 11,
    countryFlag: '🇲🇽',
  },
  {
    id: '6',
    name: 'Дьябло',
    image:
      'https://static.tildacdn.com/tild6636-6234-4431-a332-316137396639/picca-s-anchousami_0.png',
    category: 'мексиканская',
    price: 13,
    countryFlag: '🇲🇽',
  },
  {
    id: '7',
    name: 'Техасская барбекю',
    image:
      'https://shaurmaotdushi.ru/wp-content/uploads/2022/02/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8E.png',
    category: 'американская',
    price: 8,
    countryFlag: '🇺🇸',
  },
  {
    id: '8',
    name: 'Карбонара',
    image:
      'https://static.tildacdn.com/tild6436-6563-4266-b634-336230353162/photo.png',
    category: 'итальянская',
    price: 10,
    countryFlag: '🇮🇹',
  },
  {
    id: '9',
    name: 'Суприм',
    image:
      'https://tokyo-rolls.ru/image/cache/catalog/products/pizza/suprim-800x800.png',
    category: 'американская',
    price: 12,
    countryFlag: '🇺🇸',
  },
  {
    id: '10',
    name: 'Мексиканский чили',
    image:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/11484284/3454476246.jpg',
    category: 'мексиканская',
    price: 12,
    countryFlag: '🇲🇽',
  },
  {
    id: '11',
    name: 'Куриная ранч',
    image:
      'https://thumbor.uds.app/unsafe/fit-in/800x800/filters:upscale():fill(f8f9fc):quality(85)/game-prod/549756067234/74e020ad-886f-41ba-91dc-1ce86e8a4050/1654619772792',
    category: 'американская',
    price: 11,
    countryFlag: '🇺🇸',
  },
  {
    id: '12',
    name: 'Неаполитанская',
    image:
      'https://static.insales-cdn.com/images/products/1/7330/764877986/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0.png',
    category: 'итальянская',
    price: 15,
    countryFlag: '🇮🇹',
  },
  {
    id: '13',
    name: 'Сальса',
    image:
      'https://cdn.foodpicasso.com/assets/2021/01/31/e1d38c022887d83c2ab90bc0db670b0f---png_1000x_103c0_convert.png',
    category: 'мексиканская',
    price: 13,
    countryFlag: '🇲🇽',
  },
  {
    id: '14',
    name: 'Филадельфия',
    image:
      'https://i.pinimg.com/originals/3e/e2/c1/3ee2c1618b3710bb2841b2471bf13c20.png',
    category: 'американская',
    price: 15,
    countryFlag: '🇺🇸',
  },
  {
    id: '15',
    name: 'Капричоза',
    image:
      'https://bad-food.pro/wp-content/uploads/2022/08/neapolitanskaya-kaprichoza-min.png',
    category: 'итальянская',
    price: 14,
    countryFlag: '🇮🇹',
  },
  {
    id: '16',
    name: 'Мексиканская такос',
    image:
      'https://static.tildacdn.com/tild3430-3161-4261-a238-343565306665/noroot.png',
    category: 'мексиканская',
    price: 15,
    countryFlag: '🇲🇽',
  },
  {
    id: '17',
    name: 'Сицилийская',
    image: 'https://kilogram.ua/wp-content/uploads/2021/08/sicziliya.png',
    category: 'американская',
    price: 13,
    countryFlag: '🇺🇸',
  },
  {
    id: '18',
    name: 'Римская',
    image: 'https://mapizza.ru/wp-content/uploads/2021/04/losos-rukkola22.png',
    category: 'итальянская',
    price: 15,
    countryFlag: '🇮🇹',
  },
  {
    id: '19',
    name: 'Тоскана',
    image:
      'https://avatars.mds.yandex.net/get-eda/3790679/a65b96244285be7ec33a61c9d6a0f21d/M_height',
    category: 'итальянская',
    price: 10,
    countryFlag: '🇮🇹',
  },
  {
    id: '20',
    name: 'Охотничья',
    image:
      'https://static-actual-production.chibbis.ru/bd667de12a6200342f98a7e9fb461a47.png',
    category: 'американская',
    price: 7,
    countryFlag: '🇺🇸',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Крикетный день',
    date: '30 ноября в 18:00',
    description: 'Погрузитесь в мир крикета!',
  },
  {
    id: '2',
    title: 'Регби-вечер',
    date: '29 ноября в 18:00',
    description: 'Захватывающие трансляции матчей!',
  },
];

export const filterData: string[] = [
  'Итальянская',
  'Мексиканская',
  'Американская',
];

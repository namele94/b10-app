import {Product, Event} from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Домашний бульон из равиоли',
    price: 45,
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/220526171611-11-classic-french-dishes-ratatouille.jpg?q=w_1110,c_fill',
    category: 'обед',
  },
  {
    id: '2',
    name: 'Французский крем-суп',
    price: 30,
    image:
      'https://assets3.cbsnewsstatic.com/hub/i/r/2024/11/22/662dfb1d-fed2-42f1-b40c-d868165b6265/thumbnail/640x360/d66a9918f2fcb48009bd0fa5fff63a5c/1122-cmo-thedish.jpg?v=564e83c5974b3893ba1bcac5fe5947af',
    category: 'обед',
  },
  {
    id: '3',
    name: 'Уха из семги',
    price: 50,
    image:
      'https://www.allcleartravel.co.uk/wp-content/uploads/2020/09/spaghetti-bolognese-11.jpg',
    category: 'обед',
  },
  {
    id: '4',
    name: 'Клубничный чизкейк',
    price: 25,
    image:
      'https://t3.ftcdn.net/jpg/00/96/19/86/360_F_96198695_oyJg0I7ELpXI6608FI942PX9LlRRyEnd.jpg',
    category: 'десерт',
  },
  {
    id: '5',
    name: 'Шоколадный фондан',
    price: 30,
    image: 'https://chopnotch.com/wp-content/uploads/2020/11/Panna-Cotta-1.jpg',
    category: 'десерт',
  },
  {
    id: '6',
    name: 'Капучино',
    price: 15,
    image:
      'https://www.southernliving.com/thmb/mySkJSwyftC7S0A8LmegACr67bM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2548301_QFSHe_646_0_0_0_0_0-2000-cea7272becb34c6d873d7c3befb8e98d.jpg',
    category: 'завтрак',
  },
  {
    id: '7',
    name: 'Американо',
    price: 12,
    image:
      'https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg',
    category: 'завтрак',
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

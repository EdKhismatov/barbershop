'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Products', [
      {
        userId: 1,
        title: 'Шампунь BarbarossA',
        image: 'image/image-1723138963842-216592950.jpg',
        manufacturer: 'Россия',
        composition: 'Glyceryl Laurate, Phenoxyethanol, Disodium EDTA',
        hairType: 'Жирные волосы',
        size: '300 мл',
        price: 999,
      },
      {
        userId: 1,
        title: 'Шампунь Borodatos',
        image: 'image/image-1723139183004-742554214.png',
        manufacturer: 'Россия',
        composition: 'Аккорд со свежестью лайма и смолистой хвоей кедра пропитан яркими нотами перца',
        hairType: 'Нормальные волосы',
        size: '400 мл',
        price: 499,
      },
      {
        userId: 1,
        title: 'Шампунь Bandido',
        image: 'image/image-1723139325837-444479497.png',
        manufacturer: 'Турция',
        composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine',
        hairType: 'Нормальные волосы',
        size: '350 мл',
        price: 659,
      },
      {
        userId: 1,
        title: 'Maestro Company',
        image: 'image/image-1723139539054-507639623.png',
        manufacturer: 'США',
        composition: 'Без парабенов, Подходит для ежедневного применения, Без сульфатов, Без спирта',
        hairType: 'Для бороды',
        size: '50 мл',
        price: 850,
      },
      {
        userId: 1,
        title: 'WONK Бальзам для бороды',
        image: 'image/image-1723139658979-351134935.png',
        manufacturer: 'Индонезия',
        composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine',
        hairType: 'Для бороды',
        size: '50 мл',
        price: 720,
      },
      {
        userId: 1,
        title: 'Щётка для бороды',
        image: 'image/image-1723139865048-774003981.png',
        manufacturer: 'Хэндмейд',
        composition: 'С натуральной щетиной кабана',
        hairType: 'Для бороды',
        size: '0 мл',
        price: 410,
      },
      {
        userId: 1,
        title: 'Кондиционер BARBERTIME',
        image: 'image/image-1723140016850-740622960.png',
        manufacturer: 'Россия',
        composition: 'Aqua, Cyclopentasiloxane, Peg-7 Glyceryl Cocoate',
        hairType: 'Для густых волос',
        size: '400 мл',
        price: 990,
      },
      {
        userId: 1,
        title: 'Кондиционер Barber line',
        image: 'image/image-1723140227504-121880921.png',
        manufacturer: 'Россия',
        composition: 'Aqua, Cyclopentasiloxane, Peg-7 Glyceryl Cocoate',
        hairType: 'Для густых волос',
        size: '300 мл',
        price: 1290,
      },
      {
        userId: 1,
        title: 'Reuzel Бальзам',
        image: 'image/image-1723141130356-865470303.png',
        manufacturer: 'Россия',
        composition: 'Wood & Spice Beard Balm',
        hairType: 'Для бороды',
        size: '35 мл',
        price: 490,
      },
      {
        userId: 1,
        title: 'ESTEL PROFESSIONAL',
        image: 'image/image-1723141299486-898937405.png',
        manufacturer: 'Британия',
        composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine',
        hairType: 'Для бороды',
        size: '1000 мл',
        price: 2490,
      },
      {
        userId: 1,
        title: 'Maestro Company',
        image: 'image/image-1723141490944-408405057.png',
        manufacturer: 'Россия',
        composition: 'Aqua, Kaolin, Ceteareth-25, PEG-7 Glyceryl Cocoate',
        hairType: 'Для бороды',
        size: '75 мл',
        price: 350,
      },
      {
        userId: 1,
        title: 'Morgans Тоник',
        image: 'image/image-1723141613009-787806961.png',
        manufacturer: 'Россия',
        composition: 'Aqua, Kaolin, Ceteareth-25, PEG-7 Glyceryl Cocoate',
        hairType: 'Для бороды',
        size: '250 мл',
        price: 880,
      },
      {
        userId: 1,
        title: 'KEUNE шампунь',
        image: 'image/image-1723141880682-207188328.png',
        manufacturer: 'Нидерланды',
        composition: 'Aqua (water), sodium laureth sulfate, cocamidopropyl betaine',
        hairType: 'Для выпадающих волос',
        size: '100 мл',
        price: 4400,
      },
      {
        userId: 1,
        title: 'Гелья для душа',
        image: 'image/image-1723141997976-970814827.jpg',
        manufacturer: 'Россия',
        composition: 'Яблоко, горбуша',
        hairType: 'Для жирных волос',
        size: '240 мл',
        price: 500,
      },
      {
        userId: 1,
        title: 'GRET LIBERTY FOR MEN',
        image: 'image/image-1723142145761-114667260.png',
        manufacturer: 'Россия',
        composition: 'Cetyl Alcohol, Sodium Chloride, Glycol Distearate',
        hairType: 'Для сухих волос',
        size: '400 мл',
        price: 1900,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Products', null, {});
  }
};

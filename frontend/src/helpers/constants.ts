//all constants, interfaces, types, etc.

//contants

export const TABLE_LECTURES_FIRST_SEMESTER = [
  {title: 'Основы языка HTML',                        attendance: true},
  {title: 'Углубленное изучение HTML',                attendance: true},
  {title: 'Основы работы с CSS',                      attendance: true},
  {title: 'Адаптивная верстка Flexbox и Grid Layout', attendance: true},
  {title: 'Bootstrap - работа с фреймворком',         attendance: false},
  {title: 'Основы языка Javascript',                  attendance: false},
  {title: 'Работа с DOM и событиями в Javascript',    attendance: false},
  {title: 'Введение в GitHub и GitHub Pages',         attendance: false}
];

export const TABLE_PRACTICALS_FIRST_SEMESTER = [
  {title: 'Основы языка HTML',                                        attendance: true, completed: true,  task: 'Создать верстку страницы "о себе", вставить картинку'},
  {title: 'Формы и кнопки в HTML',                                    attendance: true, completed: true,  task: 'Создать верстку страницы "услуги", сделать форму заявления для создания сайта'},
  {title: 'Таблицы и интерактивные элементы HTML',                    attendance: true, completed: true,  task: 'Создать верстку страницы "первый семестр", вставить таблицы с расписанием лекций и практик, вставить фрейм гугл карт места учебы и план занятий в формате pdf'},
  {title: 'Основы работы CSS',                                        attendance: true, completed: true,  task: 'Настроить стили на созданных ранее верстках страниц с использованием css'},
  {title: 'Работа с классами в CSS',                                  attendance: true, completed: true,  task: 'Переделать стили, используя классы css'},
  {title: 'Работа с сетками и разметкой в HTML',                      attendance: true, completed: true,  task: 'Добавить в стили flex box и grid container'},
  {title: 'Адаптивная верстка',                                       attendance: true, completed: true,  task: 'Добавить адаптивную стилизацию под экраны планшетов, смартфонов и ноутбуков'},
  {title: 'Bootstrap',                                                attendance: true, completed: true,  task: 'Переделать предыдущие стили с использованием css фреймворка, например, bootstrap'},
  {title: 'Основы языка Javascript',                                  attendance: true, completed: true, task: 'Добавить интерактивность на сайт с использованием JavaScript'},
  {title: 'Базовые задачи на JS',                                     attendance: true, completed: true, task: 'Изучить базовые задачи Javascript'},
  {title: 'DOM-структура приложений и работа с объектами в языке JS', attendance: true, completed: true, task: 'Поработать с DOM структурой в JavaScript, изучить работу с объектами DOM'},
  {title: 'Встраивание скриптов',                                     attendance: true, completed: true, task: 'Научиться подключать сторонние JS скрипты к кстанице'},
  {title: 'Отладка сценариев',                                        attendance: true, completed: false, task: 'хз'},
  {title: 'Анимации и работа с ними',                                 attendance: true, completed: false, task: 'Добавить анимации на сайт с использованием css / JS'},
  {title: 'GitHub',                                                   attendance: true, completed: false, task: 'Создать репозиторий проекта на GitHub для удобного контроля версий'},
  {title: 'Защита проекта',                                           attendance: true, completed: false, task: 'Защитить, создаваемый весь семестр, проект'}
];

export const SLIDER_CARDS = [
  {id: 0, title: 'Крутая гора №1', text: 'Карточка слайдера на tailwind, и еще очень много важного текста, и еще чуток текста', img:'../assets/images/slider-photo-1.jpg'},
  {id: 1, title: 'Крутая гора №2', text: 'Карточка слайдера на tailwind, и еще очень много важного текста, и еще чуток текста', img:'../assets/images/slider-photo-2.jpg'},
  {id: 2, title: 'Крутая гора №3', text: 'Карточка слайдера на tailwind, и еще очень много важного текста, и еще чуток текста', img:'../assets/images/slider-photo-3.jpg'},
  {id: 3, title: 'Крутая гора №4', text: 'Карточка слайдера на tailwind, и еще очень много важного текста, и еще чуток текста', img:'../assets/images/slider-photo-4.jpg'},
  {id: 4, title: 'Крутая гора №5', text: 'Карточка слайдера на tailwind, и еще очень много важного текста, и еще чуток текста', img:'../assets/images/slider-photo-5.jpg'}
];

export const PROJECTS_SITES = [
  {id: 0, title: 'Сайт визитка',        src: '../assets/images/site-example-1.png'},
  {id: 0, title: 'Корпоративный сайт',  src: '../assets/images/site-example-2.png'},
  {id: 0, title: 'Интернет магазин',    src: '../assets/images/site-example-3.png'},
  {id: 0, title: 'Сайт визитка',        src: '../assets/images/site-example-1.png'},
  {id: 0, title: 'Корпоративный сайт',  src: '../assets/images/site-example-2.png'},
  {id: 0, title: 'Интернет магазин',    src: '../assets/images/site-example-3.png'},
];

//api
export const API = '/api';
export const DEVMODE = true;
//status window
export const STATUS_WINDOW_TIME = 3000;

//statusWindow codes
export enum StatusCodes {
  'error', 'info', 'loading', 'success'
};

//interfaces

//statusWindow interface
export interface IStatusWindow{
  id: number,
  status: StatusCodes,
  text: string,
  time: number,
};

//types

export type TMaybeNumber = number | null;
export type TMaybeBoolean = boolean | null;
export type TMaybeString = string | null;

// functions

export function SCROLL_TO_ANCHOR(anchor: string){
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
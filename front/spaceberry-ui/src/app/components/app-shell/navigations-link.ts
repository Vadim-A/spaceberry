import { moduleLinks } from 'src/app/core/constants/app-links';

export interface navigationLink {
  path: string;
  title: string;
}

export const NAVIGATION_LINKS: navigationLink[] = [
  {
    path: moduleLinks.home,
    title: 'Главная',
  },
  {
    path: moduleLinks.aggregates,
    title: 'Комплексы',
  },
  {
    path: moduleLinks.analitycs,
    title: 'Аналитика',
  },
  // {
  //   path: moduleLinks.supplyOrders,
  //   title: 'Заказы на поставку',
  // },
  // {
  //   path: moduleLinks.customerSearch,
  //   title: 'Поиск покупателей',
  // },
  // {
  //   path: moduleLinks.logistics,
  //   title: 'Логистика',
  // },
  {
    path: moduleLinks.diagnostics,
    title: 'Диагностика',
  },
  {
    path: moduleLinks.support,
    title: 'Поддержка',
  },
  {
    path: moduleLinks.messages,
    title: 'Сообщения',
  },
  {
    path: moduleLinks.settings,
    title: 'Настройки',
  },
];

// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  } from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { color } from "@mui/system";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilPackage,
    heading: 'Productos'
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  {
    icon: UilClipboardAlt,
    heading: "Pedidos",
  },
  {
    icon: UilChart,
    heading: 'Analíticas'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventas",
    color: {
      backGround: "linear-gradient(180deg, #1c4e80 0%, #306a99 100%)",
      boxShadow: "0px 10px 20px 0px #6599c4",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ganancias",
    color: {
      backGround: "linear-gradient(180deg, #2d7477 0%, #469a9e 100%)",
      boxShadow: "0px 10px 20px 0px #85c3c6",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Ganancias",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Gastos",
    color: {
      backGround: "linear-gradient(180deg, #e55c3c 0%, #f47658 100%)",
      boxShadow: "0px 10px 20px 0px #e29481",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Theodoro Vélez",
    noti: "Ha pedido Queso Mozzarella en lonchas, 500 gramos.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Anselmo Gómez",
    noti: "Ha recibido Queso Crema, envase 200 gramos.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Simona Montoya",
    noti: "Ha pedido Yogurt Griego, envase de 150 gramos.",
    time: "2 hours ago",
  },
];

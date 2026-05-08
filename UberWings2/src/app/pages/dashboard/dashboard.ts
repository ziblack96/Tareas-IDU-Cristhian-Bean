import { Component } from '@angular/core';
import { StatCard } from '../../components/dashboard/stat-card/stat-card';
import { DriverCard } from '../../components/dashboard/driver-card/driver-card';

export interface CardData {
    tituloCard: string;
    numeroCard: number;
}

export interface CardUser{
  imgURL: string;
  tituloUser: string;
  correoUser: string;
}


@Component({
  selector: 'app-dashboard',
  imports: [StatCard, DriverCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  card: CardData[]=[
    {
    tituloCard:"Conductores Registrados",
    numeroCard: 27,
    },
    {
    tituloCard:"Viajes Realizados",
    numeroCard: 10,
    },
    {
    tituloCard:"Ganancias Totales",
    numeroCard: 3290,
    },
  ];

  cardPerfil : CardUser[]=[
    {
      imgURL: "/assets/anciano.png",
      tituloUser: "Chris Friedkly",
      correoUser: "user@gmail.com",
    },
    {
      imgURL: "/assets/hombre.png",
      tituloUser: "Gael Harry",
      correoUser: "user@gmail.com",
    },
    {
      imgURL: "/assets/man-indu.png",
      tituloUser: "Jenna Sullivan",
      correoUser: "user@gmail.com",
    },
    {
      imgURL: "/assets/man-white.png",
      tituloUser: "Jenna Sullivan",
      correoUser: "user@gmail.com",
    },
    {
      imgURL: "/assets/man-white.png",
      tituloUser: "Jenna Sullivan",
      correoUser: "user@gmail.com",
    }
  ];
}
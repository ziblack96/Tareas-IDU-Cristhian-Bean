import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Driver{
    id:number,
    name: string,
    car_Model: string,
    plate:string,
    phone:string,
    location:string,
    rating:number,
    total_reviews:number,
    avatar_Url:  string,
    status:boolean
  }


@Component({
  selector: 'app-drivers-cards',
  imports: [CommonModule],
  templateUrl: './drivers-cards.html',
  styleUrl: './drivers-cards.css',
})

export class DriversCards {


  lista_drivers: Driver[]=[
    {
      id:1,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:2,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:3,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',  
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:4,
      name: 'Loki Bright',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
    {
      id:5,
      name: 'Loki Bright',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
    {
      id:6,
      name: 'Loki Bright',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
   {
      id:7,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
    {
      id:8,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',  
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
   {
      id:9,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor.png',
      status: true
    },
    {
      id:10,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:11,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:12,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:13,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',  
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:14,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    },
    {
      id:15,
      name: 'Michael Nguyen',
      car_Model: 'Pontiac - White - 586 5GX',
      plate: 'HBA-1933',
      phone: '0903001276',
      location: 'Salgon',
      rating: 4.5,
      total_reviews: 2.256,
      avatar_Url: '/assets/Drivers/conductor-de-taxi.png',
      status: true
    }
  ];
drivers: any;
by: any;

}
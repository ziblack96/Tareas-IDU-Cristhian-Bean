import { Component } from '@angular/core';
import { CounterCard } from '../../components/shared/counter-card/counter-card';
import { StatusBadge } from '../../components/shared/status-badge/status-badge';

export interface DriversData{
  imgAvatar: string;
  titulo: string;
  cantidadConductor:number;
}

@Component({
  selector: 'app-drivers',
  imports: [CounterCard, StatusBadge],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class Drivers {

  driver: DriversData[]= [
    {
      imgAvatar:"/assets/PerfilConductorAutobus.png",
      titulo:"Total de Conductores",
      cantidadConductor: 6
    }
  ];

  

}

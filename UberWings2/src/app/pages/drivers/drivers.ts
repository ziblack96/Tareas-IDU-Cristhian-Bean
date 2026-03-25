import { Component } from '@angular/core';
import { CounterCard } from '../../components/shared/counter-card/counter-card';
import { StatusBadge } from '../../components/shared/status-badge/status-badge';

export interface DriversData {
  imgAvatar: string;
  titulo: string;
  cantidadConductor: number;
}

@Component({
  selector: 'app-drivers',
  imports: [CounterCard, StatusBadge],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class Drivers {
  driver: DriversData[] = [
    {
      imgAvatar: '/assets/PerfilConductorAutobus.png',
      titulo: 'Total de Conductores',
      cantidadConductor: 6,
    },
  ];

  driverTable = [
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Inactivo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
    {
      correo: 'student@unitec.edu',
      nombre: 'Estudiante UNITEC',
      rol: 'Conductor',
      estado: 'Activo',
      inicioSesion: '23/12/2025 14:00:39',
      fechaRegistro: '23-Dic-2025',
    },
  ];

  SetColor(estado: string): string {
    switch (estado) {
      case 'Activo':
        return 'bg-lime-500';
      case 'Inactivo':
        return 'bg-red-500';
      default:
        return 'bg-gray-100';
    }
  }
}

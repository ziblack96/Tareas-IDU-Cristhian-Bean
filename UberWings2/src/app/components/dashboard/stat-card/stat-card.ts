import { Component, Input } from '@angular/core';
import { CardData } from '../../../pages/dashboard/dashboard';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {
    @Input() tituloCard!: string;
    @Input() numeroCard!: number;
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  imports: [],
  templateUrl: './counter-card.html',
  styleUrl: './counter-card.css',
})
export class CounterCard {
  @Input() imgAvatar!:string;
  @Input() titulo!:string;
  @Input() cantidadConductor!:number;
}
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-driver-card',
  imports: [],
  templateUrl: './driver-card.html',
  styleUrl: './driver-card.css',
})
export class DriverCard {
    @Input() imgURL!: string;
    @Input() tituloUser!: string;
    @Input() correoUser!: string;
}
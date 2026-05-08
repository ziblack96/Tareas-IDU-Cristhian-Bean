import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isAuthenticated } from './signals/shared/app.signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UberWings2');

}

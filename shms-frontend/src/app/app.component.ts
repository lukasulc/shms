import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevicesComponent } from './component/devices/devices.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DevicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shms-frontend';
}

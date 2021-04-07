import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular:D';

  curso: string = 'Curso Spring5 con Angular';
  alumno: string = 'Alvaro';
}

import { Component } from '@angular/core';
import { ElectricalProductsComponent } from './electrical-products/electrical-products.component';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { GradesComponent } from './grades/grades.component';
// import {EmailComponent} from './email/email.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ElectricalProductsComponent],
  // imports: [RouterOutlet, FormsModule, GradesComponent, EmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lesson1-homework';
  isChecked = false;
}

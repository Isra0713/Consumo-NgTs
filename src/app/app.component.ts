import { Component } from '@angular/core';
import  LayoutComponent  from "./components/layout/layout.component";
import { RouterOutlet } from '@angular/router';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-menu-dashboard';
}

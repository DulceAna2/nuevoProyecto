import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuevoProyecto';
  items:MenuItem []=[
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink:'/home'
  },
  {
      label: 'Usuario',
      icon: 'pi pi-user',
      routerLink:'/users'
  },
  {
    label: 'Dashboard',
    icon: 'pi pi-chart-line',
    routerLink:'/dashboard'
}
  ]
}


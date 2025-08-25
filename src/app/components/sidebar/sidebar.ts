import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth-service';
import { SidebarModule } from '../../modules/sidebar/sidebar-module';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, SidebarModule, RouterOutlet, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(protected authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}

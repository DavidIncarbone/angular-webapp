import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarModule } from '../../modules/sidebar/sidebar-module';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, SidebarModule, RouterOutlet, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}

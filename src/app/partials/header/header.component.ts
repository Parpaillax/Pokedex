import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public titles: Map<string, string> = new Map([
    ['/home', 'Home'],
    ['/generations', "Generations"],
    ['/contact', 'Contact'],
  ])
  public clickCount: number = 0

  plus() {
    this.clickCount++
  }
}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title= 'Glider';
  constructor() {

   }
  ngOnInit() {
  }
  isHeaderHidden = false;
  lastScrollTop = 0;
  scrollDirection = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > this.lastScrollTop && st > 0) {
      this.isHeaderHidden = true;
      this.scrollDirection = 'down';
    } else if (st < this.lastScrollTop) {
      this.isHeaderHidden = false;
      this.scrollDirection = 'up';
    }
    if (st <= 0) {
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}

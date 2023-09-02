import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showProfileActive = false;
  searchInputActive = false;
  showNavMobile = false;
  valInputSearch = '';

  @Input() navBarFixed = false;

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  showProfileContent() {
    this.showProfileActive = !this.showProfileActive;
  }
  showSearchInput() {
    this.searchInputActive = !this.searchInputActive;
    this.valInputSearch = '';
  }
  handleShowNavMobile() {
    this.showNavMobile = !this.showNavMobile
  }

  redirectToSearchPage(){
    this.router.navigate(['/search'])
  }
}

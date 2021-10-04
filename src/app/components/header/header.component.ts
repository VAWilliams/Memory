import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Memory';
  colors = {
    warning: '#F4A236',
    error: '#D4190C'
  }
  constructor() { }

  ngOnInit(): void {
  }

  restartGame() {

  }

  exitGame() {
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.scss']
})
export class SectionMenuComponent implements OnInit {
  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}

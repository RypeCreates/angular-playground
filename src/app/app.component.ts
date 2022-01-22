import { Component, OnInit } from '@angular/core';
import { Bunny } from './bunny';
import { BUNNIES } from './mock-bunnies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Bunnies';
  private bunnies = new Array<Bunny>();

  ngOnInit() {
    this.bunnies = BUNNIES;
  }

  public getBunnies() {
    return this.bunnies;
  }
}


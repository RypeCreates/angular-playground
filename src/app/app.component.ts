import { Component, OnInit } from '@angular/core';
import { BunnyComponent } from './bunny/bunny.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Bunnies';
  public bun: BunnyComponent;
  private bunnies = new Array<BunnyComponent>();

  ngOnInit() {
    // let bunny = new BunnyComponent('Gus', 'Our brave little boy');
    // // this.bun = bunny;
    // this.bunnies.push(bunny);
    // bunny = new BunnyComponent('Priscilla', 'That spooky bitch');
    // this.bunnies.push(bunny);
  }

  public getBunnies() {
    return this.bunnies;
  }
}


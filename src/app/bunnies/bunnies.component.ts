import { Component, OnInit } from '@angular/core';
import { Bunny } from '../bunny';
import { BUNNIES } from '../mock-bunnies';

@Component({
  selector: 'app-bunnies',
  templateUrl: './bunnies.component.html',
  styleUrls: ['./bunnies.component.css']
})
export class BunniesComponent implements OnInit {

  private bunnies = BUNNIES;
  private selectedBunny?: Bunny;

  constructor() { }
  // constructor(...args: string[]) {
  //   this.id = Guid.create();
  //   if (args.length === 1) {
  //     this.name = args[0];
  //   } else if (args.length === 2) {
  //     this.name = args[0];
  //     this.description = args[1];
  //   }
  // }

  ngOnInit(): void {
  }

  public onSelect(bunny): void {
    this.selectedBunny = bunny;
  }

}

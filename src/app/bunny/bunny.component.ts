import { Component, OnInit } from '@angular/core';
import { Bunny } from '../bunny';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-bunny',
  templateUrl: './bunny.component.html',
  styleUrls: ['./bunny.component.css']
})
export class BunnyComponent implements OnInit, Bunny {
  public id: Guid;
  public name = 'name';
  public description = 'description';

  constructor() {}
  // constructor(...args: string[]) {
  //   this.id = Guid.create();
  //   if (args.length === 1) {
  //     this.name = args[0];
  //   } else if (args.length === 2) {
  //     this.name = args[0];
  //     this.description = args[1];
  //   }
  // }

  ngOnInit() {
  }
}

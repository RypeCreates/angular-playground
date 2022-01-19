import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bunny',
  templateUrl: './bunny.component.html',
  styleUrls: ['./bunny.component.css']
})
export class BunnyComponent implements OnInit {
  public title: string;
  public description: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Gus';
    this.description = 'Our brave little boy';
  }




}

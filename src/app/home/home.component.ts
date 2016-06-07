import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  template: require('./home.component.jade'),
  styles:   [require('./home.component.scss')]
})

export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }
}

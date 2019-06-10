import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-welcome',
  template: `
    <div>
      <one-installer></one-installer>
      <one-enable-notifications></one-enable-notifications>
    </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

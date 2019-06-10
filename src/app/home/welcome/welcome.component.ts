import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-welcome',
  template: `
    <div>
      <one-installer></one-installer>
    </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

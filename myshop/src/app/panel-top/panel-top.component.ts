import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-top',
  templateUrl: './panel-top.component.html',
  styleUrls: ['./panel-top.component.scss']
})
export class PanelTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getCartQuanity() {
    let quantity = 0;
    for (const product of this.mainService.cart) {
    quantity += 1;
    }
    return quantity;
    }
}

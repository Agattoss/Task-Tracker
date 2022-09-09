import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  color: string = "#7B5E7B";
  text: string = "Add";
  @Output() btnClick = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
  this.btnClick.emit()

  }

}

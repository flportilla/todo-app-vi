import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

/**
 * @property {string} color
 * @property {string} text
 */
export class ButtonComponent {

  @Input() text: string = 'button'
  @Input() color: string = ''

  @Output() btnCLick = new EventEmitter

  onClick() {
    this.btnCLick.emit()
  }

}

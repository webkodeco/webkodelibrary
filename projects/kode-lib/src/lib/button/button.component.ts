import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common'; // 👈 importa la directiva

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() clicked = new EventEmitter<void>();

  onClick() { this.clicked.emit(); }
}

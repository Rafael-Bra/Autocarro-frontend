import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";


@Component({
  selector: 'app-modal',
  imports: [CommonModule, ɵEmptyOutletComponent],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = "";
  @Output() closeModal = new EventEmitter<void>();

  onClose(): void {
    this.isOpen = false;
    this.closeModal.emit();
  }

  open(){
    this.isOpen = true;
    
  }

}

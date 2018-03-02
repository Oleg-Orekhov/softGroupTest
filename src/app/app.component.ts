import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  modalWindow = false;
  onClose() {
    this.modalWindow = false;
  };
  onOpen() {
    this.modalWindow = true;
  }
}

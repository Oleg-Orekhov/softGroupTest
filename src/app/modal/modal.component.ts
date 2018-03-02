import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "../../shared/globals"
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('contactForm') form;
  @Output('windowClosed') onWindowClose = new EventEmitter();

  constructor(private http : HttpClient, private apiPath : Globals) {}

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.form);
    let data = this.form.value;
    this.http.post(this.apiPath.api_path, data);
    close();
  }
  close() {
    this.onWindowClose.emit();
  }
}

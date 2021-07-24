import { Component,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('imageModal') imageModal: ModalDirective;


  showImageModal(){
    this.imageModal.show();
  }
}



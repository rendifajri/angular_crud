import { Component, OnInit, Input, Output, ViewChild, SimpleChanges } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  exportAs: 'csi-modal',
  selector: 'csi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  classModal:string = '';
  classModalDialog:string = '';
  @ViewChild('modal') modal: ModalDirective;

  @Input() type:string;
  @Input() header:string;
  @Output() show = () => {
    this.modal.show();
  };
  @Output() hide = () => {
    this.modal.hide();
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.type != undefined || changes.type != null){
      let _type = changes.type.currentValue;
      if(_type == 'modal-left'){
        this.classModal = 'left';
        this.classModalDialog = '';
      }
      else if(_type == 'modal-right'){
        this.classModal = 'right';
        this.classModalDialog = '';
      }
      else{
        this.classModal = '';
        this.classModalDialog = _type;
      }
    }
  }
}

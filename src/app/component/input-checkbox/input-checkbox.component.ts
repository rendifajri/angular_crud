import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  exportAs: 'csi-input-checkbox',
  selector: 'csi-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputCheckboxComponent implements OnInit {

  @Input() name:string;
  @Input() indexVal:string;
  @Input() indexText:string;
  @Input() formWidth:string;
  @Input() arrData:any[];
  @Input() error:string = '';
  @Input() required:boolean = false;
  @Input() csiModel:any[] = [];
  @Output() csiModelChange = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void { }

  change(e, val){
    if(e)
      this.csiModel.push(val);
    else{
      let index = this.csiModel.indexOf(val);
      console.log(index);
      if(index > -1){
        this.csiModel.splice(index, 1);
      }
    }
    this.csiModelChange.emit(this.csiModel);
    this.blur();
  }

  blur(){
    if(this.csiModel.length == 0 && this.required)
      this.error = 'This field is required.';
    else
      this.error = '';
  }
}

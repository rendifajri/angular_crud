import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  exportAs: 'csi-input-radio',
  selector: 'csi-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputRadioComponent implements OnInit {
  @Input() name:string;
  @Input() indexVal:string;
  @Input() indexText:string;
  @Input() formWidth:string;
  @Input() arrData:any[];
  @Input() error:string = '';
  @Input() required:boolean = false;
  @Input() csiModel: any;
  @Output() csiModelChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  blur(){
    if(this.csiModel === undefined && this.required)
      this.error = 'This field is required.';
    else
      this.error = '';
  }

}

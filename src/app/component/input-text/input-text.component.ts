import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  exportAs: 'csi-input-text',
  selector: 'csi-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputTextComponent implements OnInit {
  @Input() name:string;
  @Input() type:string = 'text';//number or something
  @Input() placeholder:string;
  @Input() error:string = '';
  @Input() required:boolean = false;
  @Input() readonly:boolean = false;
  @Input() csiModel: string;
  @Output() csiModelChange = new EventEmitter<string>();
  @Output() keyup:EventEmitter<any> = new EventEmitter();
  @Output() blur:EventEmitter<any> = new EventEmitter();
  @Output() change:EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  _blur(e){
    if(e.value == '' && this.required)
      this.error = 'This field is required.';
    else
      this.error = '';
  }

}

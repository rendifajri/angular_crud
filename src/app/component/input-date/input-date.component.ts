import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BsDatepickerContainerComponent, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  exportAs: 'csi-input-date',
  selector: 'csi-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputDateComponent implements OnInit {
  @ViewChild('csiModel') compCsiModel: BsDatepickerContainerComponent;
  bsConfig: Partial<BsDatepickerConfig>;

  @Input() name:string;
  @Input() error:string = '';
  @Input() required:boolean = false;
  @Input() csiModel:Date;
  @Output() csiModelChange = new EventEmitter<Date>();

  constructor() {
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      dateInputFormat: 'D MMMM YYYY'
    });
  }

  ngOnInit(): void {
  }
  focus(){
    let date_focus_0 = document.getElementsByClassName('date_focus')[0] as HTMLElement;
    date_focus_0.style.backgroundColor = "#FFF";
    date_focus_0.style.border = "2px solid #88F";
    let date_focus_1 = document.getElementsByClassName('date_focus')[1] as HTMLElement;
    date_focus_1.style.backgroundColor = "#FFF";
    date_focus_1.style.border = "2px solid #88F";
    this.blur();
  }
  blur(){
    //console.log(this.csiModel);
    //console.log(this.required);
    if((this.csiModel === undefined || this.csiModel == null) && this.required){
      this.error = 'This field is required.';
      let date_focus_0 = document.getElementsByClassName('date_focus')[0] as HTMLElement;
      date_focus_0.style.backgroundColor = "#FFF";
      date_focus_0.style.border = "1px solid #D22";
      let date_focus_1 = document.getElementsByClassName('date_focus')[1] as HTMLElement;
      date_focus_1.style.backgroundColor = "#FFF";
      date_focus_1.style.border = "1px solid #D22";
    }
    else{
      this.error = '';
      let date_focus_0 = document.getElementsByClassName('date_focus')[0] as HTMLElement;
      date_focus_0.style.backgroundColor = "#FFF";
      date_focus_0.style.border = "2px solid #CCC";
      let date_focus_1 = document.getElementsByClassName('date_focus')[1] as HTMLElement;
      date_focus_1.style.backgroundColor = "#FFF";
      date_focus_1.style.border = "2px solid #CCC";
    }
  }

}

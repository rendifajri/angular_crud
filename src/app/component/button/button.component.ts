import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";

@Component({
  exportAs: 'csi-button',
  selector: 'csi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classExtra:string = '';
  @Input() type:string = 'button';
  @Input() disabled:boolean = false;
  isLoading:boolean = false;
  @Input() minHeight:string = '40px';
  @Output() loadingShow = () => {
    this.isLoading = true;
    this.spinner.show();
  };
  @Output() loadingHide = () => {
    this.isLoading = false;
    this.spinner.hide();
  };

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}

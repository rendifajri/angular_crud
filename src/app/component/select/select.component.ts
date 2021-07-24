import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../../helper/general.service';

@Component({
  exportAs: 'csi-select',
  selector: 'csi-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SelectComponent implements OnInit {
  loading:boolean = false;
  @Input() arrData:any[];
  @Input() indexVal:string;
  @Input() indexText:string;
  @Input() name:string;
  @Input() placeholder:string;
  @Input() serverside:boolean = false;
  @Input() serversideUrl:string;
  @Input() serversideRemark:string;
  @Input() error:string = '';
  @Input() required:boolean = false;
  @Input() csiModel: any;
  @Output() csiModelChange = new EventEmitter<any>();
  @Output() change:EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private general: GeneralService) { }

  ngOnInit(): void {
    if(this.serverside)
      this.clear()
  }
  /*ngOnChanges(changes: SimpleChanges) {
    if(this.serverside)
      this.clear()
  }*/

  search(ev){
    if(this.serverside){
      let val = ev['term'];
      console.log(val);
      if(val.length > 2){
        this.loading = true;
        const url = this.serversideUrl+val;
        /*this.http.get(url, this.general.httpOptions()).subscribe((data)=>{
          if(data['status']=='success'){
            var response=[];
            //console.log(data['response']);
            data['response'].forEach(element => {
              response.push(element);
            });
            this.arrData = response;
          }
          this.loading = false;
        }, (error)=>{
          //console.log(error['error']['message']);
          this.general.notificationCreate('Error', error['error']['message']);
          if(error['error']['message']=='Token Invalid')
            setTimeout(()=>{window.location.href = 'session/login';}, 2000);
          this.loading = false;
        });*/
      }
      else
        this.clear();
    }
  }
  clear(){
    if(this.serverside){
      this.arrData = [
        { [this.indexVal] : null, [this.indexText] : this.serversideRemark }
      ];
    }
  }
  blur(){
    //console.log(this.csiModel);
    if((this.csiModel === undefined || this.csiModel == null)&& this.required)
      this.error = 'This field is required.';
    else
      this.error = '';
  }

}

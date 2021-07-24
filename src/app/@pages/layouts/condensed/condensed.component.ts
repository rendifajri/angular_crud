import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'condensed-layout',
  templateUrl: './condensed.component.html',
  styleUrls: ['./condensed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CondensedComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label:"Dashboard",
      routerLink:"/dashboard",
      iconType:"pg pg-home",
      iconName:'',
      thumbNailClass:"",
    },
    {
      label:"Employee",
      routerLink:"/employee",
      iconType:"fa fa-users",
      iconName:'',
      thumbNailClass:"",
    },
  ];
  logout(){
    this.logouts();
  }

  ngOnInit() {
    this.checklogin();
  }
}

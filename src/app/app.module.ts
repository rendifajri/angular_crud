import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { BlankComponent } from './@pages/layouts/blank/blank.component';
import { CondensedComponent } from './@pages/layouts/condensed/condensed.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { HeaderComponent } from './@pages/components/header/header.component';
import { pagesToggleService } from './@pages/services/toggler.service';
import { pgSelectModule} from './@pages/components/select/select.module';
import { MessageModule } from './@pages/components/message/message.module';
import { MessageService } from './@pages/components/message/message.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { WebcamModule } from 'ngx-webcam';
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ContainerComponent } from './component/container/container.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { InputDateComponent } from './component/input-date/input-date.component';
import { InputRadioComponent } from './component/input-radio/input-radio.component';
import { InputCheckboxComponent } from './component/input-checkbox/input-checkbox.component';
import { DatatblComponent } from './component/datatbl/datatbl.component';
import { ModalComponent } from './component/modal/modal.component';
import { SelectComponent } from './component/select/select.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
     AppComponent,
     CondensedComponent,
     BlankComponent,
     QuickviewComponent,
     SidebarComponent,
     HorizontalMenuComponent,
     HeaderComponent,

     DashboardComponent,
     EmployeeComponent,
     ContainerComponent,
     InputTextComponent,
     InputDateComponent,
     InputRadioComponent,
     InputCheckboxComponent,
     DatatblComponent,
     ModalComponent,
     SelectComponent,
     ButtonComponent,
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     FormsModule,
     HttpClientModule,

     pgTabsModule,
     TabsModule.forRoot(),
     SharedModule,
     pgSelectModule,
     ModalModule,
     BsDropdownModule,
     BsDatepickerModule.forRoot(),
     TimepickerModule.forRoot(),
     MessageModule,
     NgxDatatableModule,
     NgSelectModule,
     WebcamModule,
     NgxSpinnerModule
  ],
  providers: [
    pagesToggleService,
    MessageService,
    { provide : LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

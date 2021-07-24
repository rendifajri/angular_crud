import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GeneralService } from '../../helper/general.service';
import { DatatblComponent } from '../../component/datatbl/datatbl.component';
import { ModalComponent } from '../../component/modal/modal.component';
import { ButtonComponent } from '../../component/button/button.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal: ModalComponent;
  @ViewChild('addModal') addModal: ModalComponent;
  @ViewChild('editModal') editModal: ModalComponent;
  @ViewChild('datatbl') datatbl: DatatblComponent;
  @ViewChild('addButton') addButton: ButtonComponent;
  @ViewChild('editButton') editButton: ButtonComponent;
  @ViewChild('delButton') delButton: ButtonComponent;

  @ViewChild('closemodal') closemodal;

  appError: string   = '';
  addId: string      = '';
  addName: string    = '';
  addStatus: string;
  addDesc: string    = '';
  addPhone: string = '';
  addCompany: string = '';
  addDept: string ='';
  editId: string= '';
  editPhone: string= '';
  editDept: string='';
  editCompany: string='';
  editName: string   = '';
  editStatus: string;
  editDesc: string   = '';
  employeeData = [];

  statusData:any[] = [
    {
      id : 'active',
      name : 'Active'
    },
    {
      id : 'inactive',
      name : 'Inactive'
    },
  ];

  tableLoading = true;
  tableRows = [];
  tableColumns = [
    { name: 'Name', prop: 'name', width: 300 },
    { name: 'Company Name', prop: 'company_name', width: 300 },
    { name: 'Phone', prop: 'phone', width: 300 },
    { name: 'Department', prop: 'department', width: 300 },
    { name: 'Status', prop: 'status', width: 300 },
  ];
  tableSelectedRow:any;

  constructor(private http: HttpClient, private general: GeneralService) { }

  ngOnInit() {
    this.getData();
    this.getDataCompany();
  }

  getData(){
    const url = environment.app_url+'employee/list';
    /*this.http.get(url, this.general.httpOptions).subscribe((data)=>{
      var response=[];
      if(data['Response'] != null){
        data['Response'].forEach(element => {
          response.push(element);
        });
      }
      this.tableRows = response;
      this.tableLoading = false;
    }, (error)=>{
      console.log(error.status);
      this.general.notificationCreate('Error', error['error']['message']);
      if(error.status == 401)
        setTimeout(()=>{window.location.href = '/';}, 2000);
    });*/
  }

  addModalShow(){
    this.addModal.show();
  }

  getDataCompany(){
    const url = environment.app_url+'company/list';
    /*this.http.get(url, this.general.httpOptions).subscribe((data)=>{
      var response=[];
      if(data['Response'] != null){
        data['Response'].forEach(element => {
          response.push(element);
        });
      }
      this.employeeData = response;
    }, (error)=>{
      console.log(error.status);
      this.general.notificationCreate('Error', error['error']['message']);
      if(error.status == 401)
        setTimeout(()=>{window.location.href = '/';}, 2000);
    });*/
  }

  addOnSubmit(form: NgForm) {
    if(this.addName!='' || this.addStatus!=''){
      console.log(this.addCompany)
      this.addButton.loadingShow();
      const url = environment.app_url+'employee/create';
      let param = {
        "name"  : this.addName,
        "company_name": this.addCompany,
        "phone"  : this.addPhone,
        "department"  : this.addDept,
        "status"  : this.addStatus,
      };
      /*return this.http.post(url, param, this.general.httpOptions)
      .subscribe((data)=>{
        form.reset();
        this.appError = '';
        this.addModal.hide();
        this.general.notificationCreate('Success', data['Message']);
        this.getData();
        this.addButton.loadingHide();
      }, (error)=>{
        this.appError = error['error']['message'];
        if(error.status == 401)
          setTimeout(()=>{window.location.href = '/';}, 2000);
        this.addButton.loadingHide();
      });*/
    }
    return null;
  }
  editModalShow() {
    if(this.datatbl.rowsSelected.length == 0)
      this.general.notificationCreate('Error', 'No rows selected');
    else if(this.datatbl.rowsSelected.length > 1)
      this.general.notificationCreate('Error', 'Selected row more than one');
    else{
      this.editId = this.datatbl.rowsSelected[0]['ID'];
      this.editName = this.datatbl.rowsSelected[0]['name'];
      this.editCompany = this.datatbl.rowsSelected[0]['company_name'];
      //console.log(this.editCompany)
      this.editPhone = this.datatbl.rowsSelected[0]['phone'];
      this.editDept = this.datatbl.rowsSelected[0]['department'];
      this.editStatus = this.datatbl.rowsSelected[0]['status'];

      this.editModal.show();
    }
  }
  editOnSubmit(form: NgForm) {
    if(this.editName!='' || this.editStatus!=''){
      this.editButton.loadingShow();
      const url = environment.app_url+'employee/update/'+this.editId;
      let param = {
        "name"   : this.editName,
        "company_name": this.editCompany,
        "phone"  : this.editPhone,
        "department"  : this.editDept,
        "status"   : this.editStatus,
      };
      /*return this.http.put(url, param, this.general.httpOptions)
      .subscribe((data)=>{
        form.reset();
        this.appError = '';
        this.general.notificationCreate('Success', data['Message']);
        this.editModal.hide();
        this.datatbl.rowsSelected = [];
        this.getData();
        this.editButton.loadingHide();
      }, (error)=>{
        this.appError = error['error']['message'];
        if(error.status == 401)
          setTimeout(()=>{window.location.href = '/';}, 2000);
        this.editButton.loadingHide();
      });*/
    }
    return null;
  }

  deleteModalShow(){
    if(this.datatbl.rowsSelected.length == 0)//can be multiple, depends on the API
      this.general.notificationCreate('Error', 'No rows selected');
    else if(this.datatbl.rowsSelected.length > 1)
      this.general.notificationCreate('Error', 'Selected row more than one');
    else
      this.deleteModal.show();
  }
  deleteAction(){
    this.delButton.loadingShow();
    var ID = this.datatbl.rowsSelected[0]['ID'];//can be multiple, depends on the API
    const url = environment.app_url+'employee/delete/'+ID;
    /*return this.http.delete(url, this.general.httpOptions).subscribe((data)=>{
      this.getData();
      this.deleteModal.hide();
      this.general.notificationCreate('Success', data['Message']);
      this.datatbl.rowsSelected = [];
      this.delButton.loadingHide();
    }, (error)=>{
      this.deleteModal.hide();
      this.general.notificationCreate('Error', error['error']['message']);
      if(error.status == 401)
        setTimeout(()=>{window.location.href = '/';}, 2000);
      this.delButton.loadingHide();
    });*/
  }

}

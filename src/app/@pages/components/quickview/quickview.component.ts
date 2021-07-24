import { Component, OnInit,OnDestroy,ViewEncapsulation,ViewChild,ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { pagesToggleService} from '../../services/toggler.service';
import {QuickviewService} from './quickview.service';
import {Note} from './note';
import {chatMessage,chatHistory} from './message';
import { environment } from '../../../../environments/environment';
import { GeneralService } from '../../../helper/general.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuickviewComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  isOpen:boolean = false;
  noteList = [];
  noteDeleteList = []
  //Single
  selectedNote:Note;
  noteText = "";
  //List for deleting or CRUD functions
  deleteNoteMode:boolean = false;
  isNoteOpen = false;
  userList = [];
  chatHistory:chatHistory;
  userMessage;
  newMessage:chatMessage;

  @ViewChild('chatHistoryWrapper') chatHistoryWrapper: ElementRef;

  constructor(private _service: QuickviewService, private http: HttpClient, private toggler:pagesToggleService, public general: GeneralService) {
    this.subscriptions.push(this.toggler.quickViewToggle.subscribe(message => { this.toggle() }));
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    for(const sub of this.subscriptions){
      sub.unsubscribe();
    }
  }
  ngOnInit() {
    // Retrieve posts from the API

    // this.subscriptions.push(this._service.getUsers().subscribe(users => {
    //   this.userList = users;
    // }));
  }
  toggle() {
    if(this.isOpen){
    	this.isOpen = false
    }
    else{
    	this.isOpen = true;
    }
  }
}

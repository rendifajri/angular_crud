import { Component, OnInit, Input, Output, ViewChild, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ColumnMode, SelectionType } from  '@swimlane/ngx-datatable';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  exportAs: 'csi-datatbl',
  selector: 'csi-datatbl',
  templateUrl: './datatbl.component.html',
  styleUrls: ['./datatbl.component.scss']
})
export class DatatblComponent implements OnInit {
  searchName:string = '';
  settingSscrollBarH = (window.innerWidth < 960);
  settingColumnMode = ColumnMode.force;
  settingSelectionType = SelectionType.multi;
  rowsSort:any = [];
  currentComponentWidth;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableWrapper') tableWrapper;

  @Input() rows = [];
  @Input() loading = true;
  @Input() columns = [];
  @Output() rowsSelected = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    window.onresize = () => {
      this.settingSscrollBarH = (window.innerWidth < 960);
    };
    this.rowsSort = this.rows;
  }

  ngOnInit(): void {
  }
  /*ngAfterViewInit():void{
    window.dispatchEvent(new Event('resize'));
    this.changeDetectorRef.detectChanges();
  }*/
  ngAfterViewChecked() {
    // Check if the table size has changed,
    if (this.table && this.table.recalculate && (this.tableWrapper.nativeElement.clientWidth !== this.currentComponentWidth)) {
      this.currentComponentWidth = this.tableWrapper.nativeElement.clientWidth;
      this.table.recalculate();

      this.changeDetectorRef.detectChanges();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.rowsSort = changes.rows.currentValue;
  }

  search() {
    const val = this.searchName.toLowerCase();
    const temp = this.rowsSort.filter((d) => {
      let res = false;
      this.columns.forEach(element => {
        //console.log(d[element.prop].toLowerCase()+' '+d[element.prop].toLowerCase().indexOf(val));
        if(!res)
          res = (d[element.prop].toLowerCase().indexOf(val) !== -1);
      });
      return res;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

}

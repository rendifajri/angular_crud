import { Injectable } from "@angular/core";
import { MessageService } from '../@pages/components/message/message.service';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {
    month_name = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    short_month_name = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    constructor(private _notification?: MessageService) { }

    notificationCreate(title, message){
        let type = title == 'Success' ? 'success' : title == 'Error' ? 'error' : 'info';
        this._notification.create(
            type,
            message,
            {
                Title:title,
                Position:'bottom-right',
                Style:'simple',
            }
        );
    }
    base64toBlob(b64Data, contentType='', sliceSize=512){
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }
    hexToString(val) {
      var valString = val.toString();
      var str = '';
      for (var i = 0; (i < valString.length && valString.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(valString.substr(i, 2), 16));
      return str;
    }
    convert_full_date(date){
      let dt = new Date(date);
      let dd = dt.getDate();
      let mm = dt.getMonth() + 1;
      let month_text = this.month_name[mm];
      let yyyy = dt.getFullYear();

      let hh = dt.getHours();
      let hour = hh.toString();
      if(hh<10){
        hour = '0'+hh;
      }
      let ii = dt.getMinutes();
      let minu = ii.toString();
      if(ii<10){
        minu = '0'+ii;
      }
      let ss = dt.getSeconds();
      let seco = ss.toString();
      if(ss<10){
        seco = '0'+ss;
      }
      let format = dd+' '+month_text+' '+yyyy+' '+hour+':'+minu+':'+seco;
      return format;
    }
    convert_full_date_short_month(date){
      let dt = new Date(date);
      let dd = dt.getDate();
      let mm = dt.getMonth() + 1;
      let month_text = this.short_month_name[mm];
      let yyyy = dt.getFullYear();

      let format = dd+' '+month_text+' '+yyyy;
      return format;
    }
    convert_date(date){
      var dt = new Date(date);
      var month=dt.getMonth() + 1;
      if(month<10){
        var mm = '0'+month;
      }else{
        var mm =''+month;
      }
      if(dt.getDate()<10){
      var dd = '0'+dt.getDate();
      }else{
        var dd =''+ dt.getDate();
      }
      var yyyy = dt.getFullYear();
      var format = yyyy + '-' + mm + '-' + dd
      return format;
    }
}

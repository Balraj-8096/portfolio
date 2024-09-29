import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(time: string, format: string = 'DD/MM/YYYY hh:mm A'): string {

    // format
    let formattedDate = 'Invalid Date';

    //  input with different date formats
    const multipleDateFormats = ['', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm', 'DD-MM-YYYY HH:mm', 'DD-MM-YYYY HH:mm:ss'];

    multipleDateFormats.forEach(dateFormat => {
      const parsedDateFormat = moment(time, dateFormat, true);
      if (parsedDateFormat.isValid()) {
        formattedDate = parsedDateFormat.format(format);
      }
    });

    return formattedDate;
  }

}

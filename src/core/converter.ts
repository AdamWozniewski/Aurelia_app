import * as moment from 'moment';

export class DateFormatConverter {
  toView(val, format) {
    return moment(val).format(format);
  }
}
import * as moment from "moment";

export function beforeDate(selectedDate: Date, endDate: Date):  boolean{
    const momentSelectedDate = moment(selectedDate);
    const momentEndDate = moment(endDate);
    if (momentSelectedDate.diff(momentEndDate, "days") <= 0) {
      return true;
    } else {
      return false;
    }

}
import {
  FormGroup,
  FormControl,
  ValidationErrors,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";
import { beforeDate } from "./date-helpers";

export function validateBeforeDate(endDate: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (beforeDate(control.value, endDate)) {
      return null;
    } else {
      {
        validateBeforeDate: true;
      }
    }
  };
}

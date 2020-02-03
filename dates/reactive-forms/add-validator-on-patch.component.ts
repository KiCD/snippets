import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { validateBeforeDate } from "../date-validators";

@Component({
  selector: "app-item-edit",
  templateUrl: "./item-edit.component.html",
  styleUrls: ["./item-edit.component.scss"]
})
export class ItemEditComponent implements OnInit {
  @ViewChild("editFormControl", { static: false })
  editFormControl: NgForm;
  itemForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const defaults = this.getDefaults();
    this.itemForm = this.formBuilder.group({
      startDate: [defaults.startDate, [Validators.required]],
      endDate: [defaults.endDate, [Validators.required]]
    });
  }
  getDefaults(): any {
    return {
      startDate: new Date(),
      endDate: new Date()
    };
  }

  edit(item: any): any {
    this.itemForm.get("startDate").disable();
    //set validators
    this.itemForm
      .get("endDate")
      .setValidators([Validators.required, validateBeforeDate(item.endDate)]);
    this.itemForm.patchValue({
      startDate: item.startDate,
      endDate: item.endDate
    });
  }
  cancel(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.itemForm.reset(this.getDefaults());
    //for clearing validation errors
    this.editFormControl.resetForm(this.getDefaults());
    this.itemForm.get("startDate").enable();
    //reset validators
    this.itemForm.get("endDate").setValidators([Validators.required]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ChilComponent2Service } from './chil-component2.service';
import { EmployeeViewModel } from './child-component2.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {

  public personDetails: EmployeeViewModel[] = [];
  public formGroup: FormGroup;
  public isEdit = false;
  public errorMessage: string;
  public progressBar = false;
  constructor(private fb: FormBuilder,
    private chilComponent2Service: ChilComponent2Service,
    private messageService: MessageService) { }

  public ngOnInit(): void {
    this.createFormGroup();
    this.getEmployeeList();
  }

  private getEmployeeList(): void {
    this.progressBar = true;
    this.chilComponent2Service.getEmployees().subscribe(response => {
      this.personDetails = response;
      this.progressBar = false;
    }, error => { console.log(error); this.errorMessage = error.message.toString(); });
  }

  private createFormGroup(): void {
    this.formGroup = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      hobby: this.fb.array([this.initHobbyArray()])
    });
  }

  public initHobbyArray(): FormGroup {
    return this.fb.group({
      hobbyName: new FormControl('', Validators.required)
    });
  }

  public onCreate(): void {
    this.progressBar = true;
    this.chilComponent2Service.saveEmployee(this.formGroup.value).subscribe(response => {
      alert('Record created successfully..!!');
      this.formGroup.reset();
      this.getEmployeeList();
      this.progressBar = false;
    }, error => { console.log(error); this.errorMessage = error.message.toString(); });
  }

  public onEdit(id: number): void {
    this.isEdit = true;
    this.progressBar = true;
    this.chilComponent2Service.getEmployee(id).subscribe(response => {
      // this.formGroup.setValue(response);
      this.formGroup.patchValue({
        id: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email,
        address: response.address,
        mobile: response.mobile,
      });
      this.progressBar = false;
    }, error => { console.log(error); this.errorMessage = error.message.toString(); });
  }

  public onDelete(id: number): void {
    const result = confirm('Do you really want to delete this recoard');
    if (result) {
      this.progressBar = true;
      this.chilComponent2Service.deleteEmployee(id).subscribe(response => {
        alert('Record deleted successfully..!!');
        this.getEmployeeList();
        this.progressBar = false;
      }, error => { console.log(error); this.errorMessage = error.message.toString(); });
    }
  }

  public onUpdate(): void {
    this.progressBar = true;
    this.chilComponent2Service.updateEmployee(this.formGroup.value).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record updated successfully..!!' });
      this.isEdit = false;
      this.formGroup.reset();
      this.getEmployeeList();
      this.progressBar = false;
    }, error => { console.log(error); this.errorMessage = error.message.toString(); });
  }

  public onCancel(): void {
    this.formGroup.reset();
    this.isEdit = false;
  }

  public validForm(): boolean {
    return !this.formGroup.valid;
  }

  public addMore(): void {
    const hobbyControl = <FormArray>this.formGroup.controls['hobby'];
    hobbyControl.push(this.initHobbyArray());
  }

  public removeHobby(index: number): void {
    const hobbyControl = <FormArray>this.formGroup.controls['hobby'];
    if (hobbyControl.length > 1) {
      hobbyControl.removeAt(index);
    }
  }

  public get formArrayData(): FormArray { return <FormArray>this.formGroup.get('hobby'); }

}

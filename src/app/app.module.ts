import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent1Component } from 'src/child-component1/child-component1.component';
import { ChildComponent2Component } from 'src/child-component2/child-component2.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EmployeeDetailComponent } from 'src/employee-detail/employee-detail.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CustomePipe } from 'src/shared/Pipe/custome.pipe';
import { CustomeDirective } from 'src/shared/Directive/custome.directive';
import { StepFormSelectorComponent } from '../step-form-selector/step-form-selector.component';
import { MutiStepFormComponent } from '../muti-step-form/muti-step-form.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ChildComponent1Component,
    ChildComponent2Component,
    EmployeeDetailComponent,
    CustomeDirective,
    StepFormSelectorComponent,
    MutiStepFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    ArchwizardModule
  ],
  providers: [MessageService, CustomePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

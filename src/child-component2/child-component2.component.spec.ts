import { ChildComponent2Component } from './child-component2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailComponent } from 'src/employee-detail/employee-detail.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';


describe('Component: ChildComponent2', () => {
    // component test
    let component: ChildComponent2Component;
    let fixture: ComponentFixture<ChildComponent2Component>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, TableModule, ToastModule],
            declarations: [ChildComponent2Component,
                EmployeeDetailComponent
            ],
            providers: [MessageService]
        });

        fixture = TestBed.createComponent(ChildComponent2Component);
        component = fixture.componentInstance;
        component.ngOnInit();
        component.isEdit = false;
    });

    it('onCancle isEdit is reset', () => {
        component.isEdit = true;
        component.onCancel();
        expect(component.isEdit).toBe(false);
    });

    // it('onCancle form is reset', () => {
    //     component.onCancel();
    //     expect(component.formGroup.controls['firstName'].value).toBeUndefined();
    // });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecompensiontransactionComponent } from './employeecompensiontransaction.component';

describe('EmployeecompensiontransactionComponent', () => {
    let component: EmployeecompensiontransactionComponent;
    let fixture: ComponentFixture<EmployeecompensiontransactionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeecompensiontransactionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeecompensiontransactionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

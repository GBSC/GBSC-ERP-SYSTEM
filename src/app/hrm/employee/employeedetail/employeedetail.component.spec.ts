import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailComponent } from './employeedetail.component';

describe('EmployeedetailComponent', () => {
    let component: EmployeedetailComponent;
    let fixture: ComponentFixture<EmployeedetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeedetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeedetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

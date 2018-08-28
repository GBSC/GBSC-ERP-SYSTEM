import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypes } from './employeetype.component';

describe('EmployeeTypes', () => {
    let component: EmployeeTypes;
    let fixture: ComponentFixture<EmployeeTypes>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeTypes]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeTypes);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

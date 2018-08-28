import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStatuscomponent } from './employeestatus.component';

describe('EmployeeStatuscomponent', () => {
    let component: EmployeeStatuscomponent;
    let fixture: ComponentFixture<EmployeeStatuscomponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeStatuscomponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeStatuscomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleaveopeningComponent } from './employeeleaveopening.component';

describe('EmployeeleaveopeningComponent', () => {
    let component: EmployeeleaveopeningComponent;
    let fixture: ComponentFixture<EmployeeleaveopeningComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeleaveopeningComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeleaveopeningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

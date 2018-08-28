import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeComponent } from './leavetypes.component';

describe('LeaveTypeComponent', () => {
    let component: LeaveTypeComponent;
    let fixture: ComponentFixture<LeaveTypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeaveTypeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeaveTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

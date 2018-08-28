import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavepurposeComponent } from './leavepurpose.component';

describe('LeavepurposeComponent', () => {
    let component: LeavepurposeComponent;
    let fixture: ComponentFixture<LeavepurposeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeavepurposeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeavepurposeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

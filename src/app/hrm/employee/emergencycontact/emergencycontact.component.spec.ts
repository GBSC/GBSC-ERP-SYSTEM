import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencycontactComponent } from './emergencycontact.component';

describe('EmergencycontactComponent', () => {
    let component: EmergencycontactComponent;
    let fixture: ComponentFixture<EmergencycontactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmergencycontactComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmergencycontactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

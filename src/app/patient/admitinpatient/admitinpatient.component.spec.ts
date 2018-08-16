import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitinpatientComponent } from './admitinpatient.component';

describe('AdmitinpatientComponent', () => {
    let component: AdmitinpatientComponent;
    let fixture: ComponentFixture<AdmitinpatientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdmitinpatientComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdmitinpatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

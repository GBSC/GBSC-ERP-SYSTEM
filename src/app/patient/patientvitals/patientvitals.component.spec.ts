import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvitalsComponent } from './patientvitals.component';

describe('PatientvitalsComponent', () => {
    let component: PatientvitalsComponent;
    let fixture: ComponentFixture<PatientvitalsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientvitalsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientvitalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

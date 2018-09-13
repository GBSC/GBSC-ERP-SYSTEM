import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuitypaymentComponent } from './gratuitypayment.component';

describe('GratuitypaymentComponent', () => {
    let component: GratuitypaymentComponent;
    let fixture: ComponentFixture<GratuitypaymentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GratuitypaymentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GratuitypaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

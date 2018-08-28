import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestobservationComponent } from './latestobservation.component';

describe('LatestobservationComponent', () => {
    let component: LatestobservationComponent;
    let fixture: ComponentFixture<LatestobservationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LatestobservationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LatestobservationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTrendSummaryComponent } from './health-trend-summary.component';

describe('HealthTrendSummaryComponent', () => {
    let component: HealthTrendSummaryComponent;
    let fixture: ComponentFixture<HealthTrendSummaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HealthTrendSummaryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HealthTrendSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

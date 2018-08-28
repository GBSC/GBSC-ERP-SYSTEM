import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterComponent } from './costcenters.component';

describe('CostCenterComponent', () => {
    let component: CostCenterComponent;
    let fixture: ComponentFixture<CostCenterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CostCenterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CostCenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

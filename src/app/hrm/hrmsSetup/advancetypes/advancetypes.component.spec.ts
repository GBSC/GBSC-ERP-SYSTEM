import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTypeComponent } from './advancetypes.component';

describe('AdvanceTypeComponent', () => {
    let component: AdvanceTypeComponent;
    let fixture: ComponentFixture<AdvanceTypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdvanceTypeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvanceTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

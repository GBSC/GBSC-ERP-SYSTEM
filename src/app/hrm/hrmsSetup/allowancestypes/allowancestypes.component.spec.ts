import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancesTypeComponent } from './allowancestypes.component';

describe('AllowancesTypeComponent', () => {
    let component: AllowancesTypeComponent;
    let fixture: ComponentFixture<AllowancesTypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllowancesTypeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllowancesTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

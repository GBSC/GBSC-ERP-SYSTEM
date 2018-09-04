import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarystructureComponent } from './salarystructure.component';

describe('SalarystructureComponent', () => {
    let component: SalarystructureComponent;
    let fixture: ComponentFixture<SalarystructureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SalarystructureComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalarystructureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

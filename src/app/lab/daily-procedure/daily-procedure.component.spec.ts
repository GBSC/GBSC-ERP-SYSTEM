import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProcedureComponent } from './daily-procedure.component';

describe('DailyProcedureComponent', () => {
    let component: DailyProcedureComponent;
    let fixture: ComponentFixture<DailyProcedureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DailyProcedureComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DailyProcedureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsblockComponent } from './appointmentsblock.component';

describe('AppointmentsblockComponent', () => {
    let component: AppointmentsblockComponent;
    let fixture: ComponentFixture<AppointmentsblockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppointmentsblockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentsblockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

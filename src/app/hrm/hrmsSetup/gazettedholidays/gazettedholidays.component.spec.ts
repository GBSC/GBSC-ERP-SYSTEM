import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazettedHolidaysComponent } from './gazettedholidays.component';

describe('GazettedHolidaysComponent', () => {
    let component: GazettedHolidaysComponent;
    let fixture: ComponentFixture<GazettedHolidaysComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GazettedHolidaysComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GazettedHolidaysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

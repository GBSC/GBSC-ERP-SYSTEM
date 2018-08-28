import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionComponent } from './religion.component';

describe('ReligionComponent', () => {
    let component: ReligionComponent;
    let fixture: ComponentFixture<ReligionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReligionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReligionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationComponent } from './designations.component';

describe('DesignationComponent', () => {
    let component: DesignationComponent;
    let fixture: ComponentFixture<DesignationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DesignationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DesignationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

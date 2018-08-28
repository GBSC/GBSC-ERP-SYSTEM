import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinformationComponent } from './basicinformation.component';

describe('BasicinformationComponent', () => {
    let component: BasicinformationComponent;
    let fixture: ComponentFixture<BasicinformationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BasicinformationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicinformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
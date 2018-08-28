import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasswordComponent } from './cpassword.component';

describe('CpasswordComponent', () => {
    let component: CpasswordComponent;
    let fixture: ComponentFixture<CpasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CpasswordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CpasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

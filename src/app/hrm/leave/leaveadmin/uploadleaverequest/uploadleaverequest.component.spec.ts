import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadleaverequestComponent } from './uploadleaverequest.component';

describe('UploadleaverequestComponent', () => {
    let component: UploadleaverequestComponent;
    let fixture: ComponentFixture<UploadleaverequestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UploadleaverequestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadleaverequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

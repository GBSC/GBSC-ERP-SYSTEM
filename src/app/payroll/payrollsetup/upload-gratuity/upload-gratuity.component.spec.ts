import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGratuityComponent } from './upload-gratuity.component';

describe('UploadGratuityComponent', () => {
    let component: UploadGratuityComponent;
    let fixture: ComponentFixture<UploadGratuityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UploadGratuityComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadGratuityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

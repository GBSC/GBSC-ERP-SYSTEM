import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsupplierComponent } from './addnewsupplier.component';

describe('AddnewsupplierComponent', () => {
    let component: AddnewsupplierComponent;
    let fixture: ComponentFixture<AddnewsupplierComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddnewsupplierComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddnewsupplierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

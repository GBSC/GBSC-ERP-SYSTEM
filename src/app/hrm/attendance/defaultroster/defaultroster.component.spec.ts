import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultrosterComponent } from './defaultroster.component';

describe('DefaultrosterComponent', () => {
    let component: DefaultrosterComponent;
    let fixture: ComponentFixture<DefaultrosterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DefaultrosterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultrosterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralactionsComponent } from './generalactions.component';

describe('GeneralactionsComponent', () => {
    let component: GeneralactionsComponent;
    let fixture: ComponentFixture<GeneralactionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeneralactionsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GeneralactionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalaryfilesComponent } from './createsalaryfiles.component';

describe('CreatesalaryfilesComponent', () => {
    let component: CreatesalaryfilesComponent;
    let fixture: ComponentFixture<CreatesalaryfilesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatesalaryfilesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatesalaryfilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

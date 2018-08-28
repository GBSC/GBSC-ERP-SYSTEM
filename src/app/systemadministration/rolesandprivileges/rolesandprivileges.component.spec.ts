import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesandprivilegesComponent } from './rolesandprivileges.component';

describe('SystemadministrationComponent', () => {
    let component: RolesandprivilegesComponent;
    let fixture: ComponentFixture<RolesandprivilegesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RolesandprivilegesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RolesandprivilegesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

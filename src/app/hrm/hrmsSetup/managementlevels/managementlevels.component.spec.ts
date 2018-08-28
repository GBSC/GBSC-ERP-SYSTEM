import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLevelsComponent } from './managementlevels.component';

describe('ManagementLevelsComponent', () => {
    let component: ManagementLevelsComponent;
    let fixture: ComponentFixture<ManagementLevelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManagementLevelsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManagementLevelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

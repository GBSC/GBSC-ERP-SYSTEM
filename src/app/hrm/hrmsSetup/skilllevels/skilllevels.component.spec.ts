import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelsComponent } from './skilllevels.component';

describe('SkillLevelsComponent', () => {
    let component: SkillLevelsComponent;
    let fixture: ComponentFixture<SkillLevelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SkillLevelsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillLevelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

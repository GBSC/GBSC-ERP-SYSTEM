import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentvisitsComponent } from './recentvisits.component';

describe('RecentvisitsComponent', () => {
    let component: RecentvisitsComponent;
    let fixture: ComponentFixture<RecentvisitsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecentvisitsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecentvisitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRecordComponent } from './file-record.component';

describe('FileRecordComponent', () => {
    let component: FileRecordComponent;
    let fixture: ComponentFixture<FileRecordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FileRecordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FileRecordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

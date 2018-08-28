import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { routing } from './attendance.routing';
import { RootComponent } from '../attendance/root/root.component';
import { DefaultrosterComponent } from '../attendance/defaultroster/defaultroster.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DevExtremeModule,
        routing
    ],
    declarations: [
        RootComponent,
        DefaultrosterComponent
    ],
    exports: [],
    providers: []
})
export class AttendanceModule { }

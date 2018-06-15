import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Rfbloyalty2SharedModule } from '../../shared';
import {
    RfbEventAttendanceService,
    RfbEventAttendancePopupService,
    RfbEventAttendanceComponent,
    RfbEventAttendanceDetailComponent,
    RfbEventAttendanceDialogComponent,
    RfbEventAttendancePopupComponent,
    RfbEventAttendanceDeletePopupComponent,
    RfbEventAttendanceDeleteDialogComponent,
    rfbEventAttendanceRoute,
    rfbEventAttendancePopupRoute,
} from './';

const ENTITY_STATES = [
    ...rfbEventAttendanceRoute,
    ...rfbEventAttendancePopupRoute,
];

@NgModule({
    imports: [
        Rfbloyalty2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDetailComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    entryComponents: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    providers: [
        RfbEventAttendanceService,
        RfbEventAttendancePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Rfbloyalty2RfbEventAttendanceModule {}

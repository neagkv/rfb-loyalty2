import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Rfbloyalty2SharedModule } from '../../shared';
import {
    RfbUserService,
    RfbUserPopupService,
    RfbUserComponent,
    RfbUserDetailComponent,
    RfbUserDialogComponent,
    RfbUserPopupComponent,
    RfbUserDeletePopupComponent,
    RfbUserDeleteDialogComponent,
    rfbUserRoute,
    rfbUserPopupRoute,
} from './';

const ENTITY_STATES = [
    ...rfbUserRoute,
    ...rfbUserPopupRoute,
];

@NgModule({
    imports: [
        Rfbloyalty2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RfbUserComponent,
        RfbUserDetailComponent,
        RfbUserDialogComponent,
        RfbUserDeleteDialogComponent,
        RfbUserPopupComponent,
        RfbUserDeletePopupComponent,
    ],
    entryComponents: [
        RfbUserComponent,
        RfbUserDialogComponent,
        RfbUserPopupComponent,
        RfbUserDeleteDialogComponent,
        RfbUserDeletePopupComponent,
    ],
    providers: [
        RfbUserService,
        RfbUserPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Rfbloyalty2RfbUserModule {}

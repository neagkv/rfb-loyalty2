import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Rfbloyalty2SharedModule } from '../../shared';
import {
    RfbLocationService,
    RfbLocationPopupService,
    RfbLocationComponent,
    RfbLocationDetailComponent,
    RfbLocationDialogComponent,
    RfbLocationPopupComponent,
    RfbLocationDeletePopupComponent,
    RfbLocationDeleteDialogComponent,
    rfbLocationRoute,
    rfbLocationPopupRoute,
    RfbLocationResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...rfbLocationRoute,
    ...rfbLocationPopupRoute,
];

@NgModule({
    imports: [
        Rfbloyalty2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RfbLocationComponent,
        RfbLocationDetailComponent,
        RfbLocationDialogComponent,
        RfbLocationDeleteDialogComponent,
        RfbLocationPopupComponent,
        RfbLocationDeletePopupComponent,
    ],
    entryComponents: [
        RfbLocationComponent,
        RfbLocationDialogComponent,
        RfbLocationPopupComponent,
        RfbLocationDeleteDialogComponent,
        RfbLocationDeletePopupComponent,
    ],
    providers: [
        RfbLocationService,
        RfbLocationPopupService,
        RfbLocationResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Rfbloyalty2RfbLocationModule {}

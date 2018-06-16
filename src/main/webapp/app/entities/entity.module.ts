import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { Rfbloyalty2RfbLocationModule } from './rfb-location/rfb-location.module';
import { Rfbloyalty2RfbEventModule } from './rfb-event/rfb-event.module';
import { Rfbloyalty2RfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { Rfbloyalty2RfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Rfbloyalty2RfbLocationModule,
        Rfbloyalty2RfbEventModule,
        Rfbloyalty2RfbEventAttendanceModule,
        Rfbloyalty2RfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Rfbloyalty2EntityModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AttendeesRoutingModule } from './attendees-routing.module';
import { AttendeeDialogComponent } from './components/attendee-dialog/attendee-dialog.component';
import { AttendeeFormComponent } from './components/attendee-form/attendee-form.component';
import { AttendeeTableComponent } from './components/attendee-table/attendee-table.component';
import { AttendeesComponent } from './containers/attendees/attendees.component';


@NgModule({
  imports: [CommonModule, AttendeesRoutingModule],
  declarations: [
    AttendeesComponent,
    AttendeeDialogComponent,
    AttendeeFormComponent,
    AttendeeTableComponent
  ]
})
export class AttendeesModule {}

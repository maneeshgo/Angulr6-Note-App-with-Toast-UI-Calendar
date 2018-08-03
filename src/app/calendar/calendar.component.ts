import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTuiCalendarComponent } from '../../../projects/ngx-tui-calendar/src/lib';
import { ClickDaynameEvent, BeforeCreateScheduleEvent } from '../../../projects/ngx-tui-calendar/src/lib/Models/Events';
import { Schedule } from '../../../projects/ngx-tui-calendar/src/lib/Models/Schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: NgxTuiCalendarComponent;
  schedules: Schedule[];
	defaultView = 'month';
  label = null;
	constructor() {
  }

  ngOnInit(): void {
    this.calendar.changeView(this.defaultView);
    this.schedules = JSON.parse(localStorage.getItem('notes')) || [];
  }

	onTuiCalendarCreated($event) {
	}

  onBeforeCreateSchedule(event: BeforeCreateScheduleEvent) {
    console.log('beforeCreateScheduleEvent', event);
  }

  onDate(date) {
    console.log('onDate', date);
  }

  onTime(dateTime) {
    console.log('dateTime', dateTime);
  }

	onSchedule(schedule) {
		console.log('schedule', schedule);
	}

	onDateChange($event) {
		this.calendar.setDate(new Date($event.target.value));
	}

	onCalendarToday() {
		this.calendar.today();
	}

	onCalendarNext() {
		this.calendar.next();
	}

	onCalendarPrev() {
		this.calendar.prev();
	}

}

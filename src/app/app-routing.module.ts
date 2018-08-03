import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes=[
  {path: '', component: TodoComponent},
  {path: 'list', component: TodoComponent},
  {path: 'calendar', component: CalendarComponent}
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { 
  

}

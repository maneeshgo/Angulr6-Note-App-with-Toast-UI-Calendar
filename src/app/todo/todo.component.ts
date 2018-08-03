import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  constructor() { }

  ngOnInit() {
    this.toDoListArray = JSON.parse(localStorage.getItem('notes')) || [];
  }

  onAdd(itemTitle) {
    let id = Math.random().toString(36).substr(2, 16)
        , date = new Date();

    this.toDoListArray.push({title: itemTitle.value, id: id, calendarId: id, isChecked: false, start: date, end: date, category: 'time'});
    localStorage.removeItem("notes");
    localStorage.setItem('notes', JSON.stringify(this.toDoListArray));
    itemTitle.value = null;
  }

  alterCheck(id: string,isChecked) {
    this.toDoListArray.forEach(function(item, i, itemArray){
      if(id == item.id){
        itemArray[i].isChecked = isChecked;
        return;
      }
    });
    localStorage.removeItem("notes");
    localStorage.setItem('notes', JSON.stringify(this.toDoListArray))
  }

  onDelete(id : string){
    this.toDoListArray.forEach(function(item, i, itemArray){
      if(id == item.id){
        itemArray.splice(i, 1);
        return;
      }
    });
    localStorage.removeItem("notes");
    localStorage.setItem('notes', JSON.stringify(this.toDoListArray))
  }

}

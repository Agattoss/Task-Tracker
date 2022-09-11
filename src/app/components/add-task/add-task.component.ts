import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> =new EventEmitter()
  text!: string;
  date!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      return
    }
    const newTask = {
    text: this.text,
    date: this.date,
    reminder: this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text='';
    this.date='';
    this.reminder= false
  }


}
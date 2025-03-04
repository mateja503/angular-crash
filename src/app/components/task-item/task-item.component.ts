import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent  } from '@fortawesome/angular-fontawesome';
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'app-task-item'  ,
  imports: [FaIconComponent,NgStyle,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {



  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor () {}

  ngOnInit(): void {
    console.log(this.faTimes)
  }


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
      this.onToggleReminder.emit(task);
      // console.log('123');
    }



  

}

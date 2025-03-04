import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Tasks';
import { TaskService } from '../../services/task.service';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";

 
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {


  tasks : Task[]  = [];
 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
      
    // this.tasks = this.taskService.getTasks(); 
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks); // this is how to use observeble 

  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
      next:()=>{
        this.tasks = this.tasks.filter(t=>t.id !== task.id)
      },
      error: (err) => {
        console.error('Error deleting taks: ', err);
      }
    });
    }

    toggleReminder(task: Task){
        task.reminder = !task.reminder;
        this.taskService.updateTaskReminder(task).subscribe()
    }

    addTask(task: Task) {
        this.taskService.addTask(task).subscribe((task)=> (this.tasks.push(task)))
      }
      



}

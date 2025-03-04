import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Tasks';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean
  subscription: Subscription

  constructor (private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value)
  }


  onSubmit() {
      if(!this.text)
        {
          alert('Please add a Task');
          return;
        }

        const newTask = {
          text: this.text,
          day: this.day,
          reminder: this.reminder
        }

        this.onAddTask.emit(newTask);

        this.text = '';
        this.day = ''
        this.reminder = false
    }

}

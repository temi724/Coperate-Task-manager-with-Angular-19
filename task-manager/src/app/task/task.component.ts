import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../data';
import { NewTask, Task } from '../models/task';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  addtaskClicked: boolean = false;

  constructor(private taskService: TaskService) {}
  get userTasks() {
    return this.taskService.userTasks(this.userId);
  }

  onAddTaskClicked() {
    this.addtaskClicked = !this.addtaskClicked;
  }
  closeAddTask() {
    this.addtaskClicked = false;
  }
}

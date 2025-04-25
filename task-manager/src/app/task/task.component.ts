import { Component, Input } from '@angular/core';
import { dummyTasks } from '../data';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasks: Task[] = dummyTasks;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}

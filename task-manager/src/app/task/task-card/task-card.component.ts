import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../../data';
import { Task } from '../../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  tasks = dummyTasks;
  @Input({ required: true }) task!: Task;
  // @Output() taskCompleted = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DUMMY_USERS, dummyTasks } from '../data';
import { NewTask, Task } from '../models/task';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskService } from './task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  // @Input({ required: true }) name!: string;
  name: string = '';
  Users = DUMMY_USERS;
  @Input({ required: true }) userId!: string;
  addtaskClicked: boolean = false;

  constructor(private taskService: TaskService, private ar: ActivatedRoute) {}
  get userTasks() {
    return this.taskService.userTasks(this.userId);
  }

  onAddTaskClicked() {
    this.addtaskClicked = !this.addtaskClicked;
  }
  closeAddTask() {
    this.addtaskClicked = false;
  }
  ngOnInit() {
    this.ar.params.subscribe((params) => {
      this.userId = params['userId'];
      this.name =
        this.Users.find((user) => user.id === this.userId)?.name || '';
    });
  }
}

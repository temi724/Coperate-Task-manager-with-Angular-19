import { Routes } from '@angular/router';
import { TaskCardComponent } from './task/task-card/task-card.component';
import { TaskComponent } from './task/task.component';
import { NoTaskComponent } from './no-task/no-task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: TaskComponent,
    children: [
      {
        path: 'tasks',
        component: TaskCardComponent,
      },
      {
        path: 'tasks/new',
        component: AddTaskComponent,
      },
    ],
  },
];

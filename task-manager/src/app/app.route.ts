import { Routes } from '@angular/router';
import { TaskCardComponent } from './task/task-card/task-card.component';
import { TaskComponent } from './task/task.component';
import { NoTaskComponent } from './no-task/no-task.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: TaskComponent,
  },
];

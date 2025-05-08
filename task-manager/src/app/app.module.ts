import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { TaskCardComponent } from './task/task-card/task-card.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.route';
import { NoTaskComponent } from './no-task/no-task.component';
import { RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    TaskCardComponent,
    NoTaskComponent,

    // AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddTaskComponent,
    RouterLinkActive,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}

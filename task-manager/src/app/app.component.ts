import { Component } from '@angular/core';
import { DUMMY_USERS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager';
  users = DUMMY_USERS;
  name: string = '';
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onUserSelected(userId: string) {
    this.selectedUserId = userId;

    // console.log('Selected user:', selectedUser);
  }
}

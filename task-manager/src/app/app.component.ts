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

  onUserSelected(userId: string) {
    console.log('User selected:' + userId);
    const selectedUser = this.users.find((user) => user.id === userId);
    if (selectedUser) {
      this.name = selectedUser.name;
    }
    console.log('Selected user:', selectedUser);
  }
}

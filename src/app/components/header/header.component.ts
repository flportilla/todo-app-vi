import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  public title: string = 'Task Tracker';
  public showAddTask!: boolean;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }

}

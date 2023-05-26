import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  public text: string = "";
  public day: string = "";
  public reminder: boolean = false;
  public showAddTask!: boolean;

  constructor(private uiService: UiService) {
    this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  onSubmit() {

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false

    return
  }

}

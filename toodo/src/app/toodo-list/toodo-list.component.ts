import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toodo-list',
  templateUrl: './toodo-list.component.html',
  styleUrls: ['./toodo-list.component.css']
})
export class ToodoListComponent {
  taskArray = [{ taskName: 'Adicionar Pedidos', isCompleted: false }]
  onSubmit(form: NgForm) {
    console.log(form.controls);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });
    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}

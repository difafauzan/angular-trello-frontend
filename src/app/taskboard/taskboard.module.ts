import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskboardComponent } from './taskboard/taskboard.component';

import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TaskboardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  exports: [TaskboardComponent],
})
export class TaskboardModule {}

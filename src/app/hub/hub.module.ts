import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LessonItemComponent } from './lesson-item/lesson-item.component';
import { MatCardModule } from '@angular/material/card';
import { DefaultPageComponent } from './default-page/default-page.component';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HubComponent,
    LessonItemComponent,
    DefaultPageComponent,
    LessonPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports:
  [
    HubComponent
  ]
})
export class HubModule { }
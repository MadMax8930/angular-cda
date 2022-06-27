import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconDeleteComponent,
    IconCloseComponent,
    IconEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconDeleteComponent,
    IconCloseComponent,
    IconEditComponent
  ]
})
export class IconsModule { }

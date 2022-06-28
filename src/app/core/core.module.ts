import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiModule,
    IconsModule,
    TemplatesModule,
    LoginModule,
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule { }

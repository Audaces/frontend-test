import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SectionRightComponent } from './section-right/section-right.component';
import { SectionMenuComponent } from './section-menu/section-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    SectionRightComponent,
    SectionMenuComponent,
    FooterComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

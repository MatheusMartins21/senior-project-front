import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemsService } from './items/items.service';
import { ItemsCreateComponent } from './items-create/items-create.component';
import { ItemsUpdateComponent } from './items-update/items-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ItemsComponent,
    AboutComponent,
    HomeComponent,
    ItemsCreateComponent,
    ItemsUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    SidebarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ToastModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

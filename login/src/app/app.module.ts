import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateComponent } from './create/create.component';
import { MenuComponent } from './menu/menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { JumboComponent } from './jumbo/jumbo.component';
import { BottomComponent } from './bottom/bottom.component';

const appRoutes: Routes = [
    // the HomePageComponent and Test1Component must be the same with import xxxx above
    {path:'menu', component: MenuComponent},
    {path:'create', component: CreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    MenuComponent,
    JumboComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

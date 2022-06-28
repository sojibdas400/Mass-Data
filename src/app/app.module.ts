import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonsComponent} from './components/persons/persons.component';
import { PersonsFormComponent } from './components/persons-form/persons-form.component';
import { NavComponent } from './components/layouts/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonsComponent,
        PersonsFormComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

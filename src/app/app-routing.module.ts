import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {PersonsComponent} from './components/persons/persons.component';
import {PersonsFormComponent} from './components/persons-form/persons-form.component';

const routes: Routes = [
    {
        path: '',
        component: PersonsComponent,
        data: {
            title: 'Persons',
        },
    },
    {
        path: 'add',
        component: PersonsFormComponent,
        data: {
            title: 'Persons',
        },
    },
    {
        path: 'edit/:id',
        component: PersonsFormComponent,
        data: {
            title: 'Persons',
        },
    },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    // onSameUrlNavigation: 'reload'
    // anchorScrolling: 'enabled',
    // scrollOffset: [0, 100] // [x, y]
    // ...any other options you'd like to use
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

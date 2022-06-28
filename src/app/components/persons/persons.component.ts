import {Component, OnInit} from '@angular/core';
import {PersonsService} from '@app/services';
import {Router} from "@angular/router";
import {Person} from '@app/model';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
    persons: Person[] = [];

    constructor(private router: Router,
        private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.getAllPersons();
    }

    private getAllPersons() {
        const data = this.personsService.getAllPersons();
        this.persons = data;
    }

    public editPerson(i: any) {
        this.router.navigate(['/edit', i]);
    }

    public deletePerson(i: number) {
        this.persons.splice(i, 1);
    }

}

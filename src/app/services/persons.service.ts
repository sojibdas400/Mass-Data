import { Injectable } from '@angular/core';
import {Person} from '@app/model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
    persons:Person[] = [];

  constructor() { }

  getAllPersons() {
        return this.persons;
    }
    getOne(id: any){
      const index = this.persons.findIndex((person: Person) => person.id == id);
      return this.persons[index];
    }

    addPersons(data: Person): Person[] {
     this.persons.push(data);
      return this.persons;
    }

    updatePersons(id: number, data: Person) : Person[] {
        const index = this.persons.findIndex((person: Person) => person.id == id);
        this.persons[index] = data;
        return this.persons;
    }

}

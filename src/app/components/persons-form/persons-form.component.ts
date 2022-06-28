import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {PersonsService} from '@app/services';
import {Person} from '@app/model';

@Component({
    selector: 'app-persons-form',
    templateUrl: './persons-form.component.html',
    styleUrls: ['./persons-form.component.scss']
})
export class PersonsFormComponent implements OnInit {
    // @ts-ignore
    id: any;
    persons: Person[] = [];
     // @ts-ignore
    person: Person;
    // @ts-ignore
    personForm: FormGroup;

    constructor(private personsService: PersonsService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.personForm = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            address: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            educationalQualifications: this.formBuilder.array([])
        });

    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id) {
            this.getPerson(this.id)
        }
    }
    get getPersonForm() {
        return this.personForm.controls;
    }

    get educationalQualifications() {
        return this.personForm.controls['educationalQualifications'] as FormArray;
    }


    addItem() {
        const form = this.formBuilder.group({
            name: [''],
            instituteName: [''],
            grade: [''],
            fromDate: [''],
            toDate: [''],
        })
        this.educationalQualifications.push(form);
    }

    removeItem(i: any) {
        this.educationalQualifications.removeAt(i);
    }

    personFormSubmit() {
        if (this.personForm.invalid) {
            return;
        }

        if (!this.id) {
            this.personForm.controls['id']?.setValue(Math.floor(Math.random() * 1000000));
            const data:Person[] = this.personsService.addPersons(this.personForm.value);
            this.persons = data;
        } else {
            const data = this.personsService.updatePersons(this.id, this.personForm.value);
            this.persons = data;
        }
        this.router.navigate(['/']);

    }

    getPerson(id: any) {
        this.person = this.personsService.getOne(id);
        if (!this.person) {
            this.router.navigate(['/']);
        }
        this.person?.educationalQualifications?.forEach((person: any) => {
            const form = this.formBuilder.group({
                name: [person.name],
                instituteName: [person.instituteName],
                grade: [person.grade],
                fromDate: [person.fromDate],
                toDate: [person.toDate],
            })
            this.educationalQualifications.push(form);
        })
        this.personForm.patchValue(this.person);
    }
}

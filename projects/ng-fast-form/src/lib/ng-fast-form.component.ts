import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ng-fast-form',
  template: `<form [style.margin]="'50px'" [formGroup]="myForm">
    <!-- 2 column grid layout with text inputs for the first and last names -->

    <!-- Si le dev choisir des input en deux colonnes -->

    <div *ngIf="ngInputLayout == '2-columns'" class="row mb-6">
      <ng-container *ngFor="let input of ngInputDetails">
        <div
          *ngIf="
            input.type == 'text' ||
            input.type == 'number' ||
            input.type == 'email'
          "
          class="col-6"
        >
          <div class="form-outline">
            <label class="form-label" [for]="input.type">{{
              input.label
            }}</label>

            <input
              formControlName="{{ input.name }}"
              [type]="input.type"
              [id]="input.id"
              class="form-control"
            />
          </div>
        </div>
        <div *ngIf="input.type == 'text-area'" class="form-outline mb-4">
          <label class="form-label" [for]="input.id"> {{ input.label }}</label>

          <textarea
            formControlName="{{ input.name }}"
            class="form-control"
            [id]="input.id"
            rows="4"
          ></textarea>
        </div>
        <div *ngIf="input.type == 'select-options'">
          <b> {{ input.label }} </b>

          <select
            formControlName="{{ input.name }}"
            class="form-select"
            attr.aria-label="{{ input.label }}"
          >
            <option selected>{{ input.defaultSelectedName }}</option>

            <option
              *ngFor="let option of input.options"
              value="{{ option.value }}"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div *ngIf="input.type == 'radio'">
          <b>{{ input.header }}</b>
          <div *ngFor="let radio of input.radios" class="form-check">
            <input
              formControlName="{{ input.name }}"
              class="form-check-input"
              type="radio"
              [name]="radio.name"
              [id]="radio.id"
              [value]="radio.value"
            />
            <label class="form-check-label" [for]="radio.id">
              {{ radio.label }}
            </label>
          </div>
        </div>

        <div *ngIf="input.type == 'checkbox'">
          <b> {{ input.header }} </b>
          <br />
          <!-- <div *ngFor="let checkbox of input.checkboxes" class="form-check"> -->
          <input
            formControlName="{{ input.name }}"
            class="form-check-input"
            type="checkbox"
            [value]="input.value"
            [id]="input.id"
            (change)="onCheckboxChange($event)"
          />
          <label class="form-check-label" [for]="input.id">
            {{ input.header }}
          </label>
          <!-- </div> -->
        </div>
      </ng-container>
    </div>

    <!-- Si le dev choisir des input sur une colonnes -->

    <div *ngIf="ngInputLayout == '1-column'">
      <ng-container *ngFor="let input of ngInputDetails">
        <div
          *ngIf="
            input.type == 'text' ||
            input.type == 'number' ||
            input.type == 'email'
          "
          class="col"
        >
          <div class="form-outline">
            <label class="form-label" [for]="input.type">{{
              input.label
            }}</label>

            <input
              formControlName="{{ input.name }}"
              [type]="input.type"
              [id]="input.id"
              class="form-control"
            />
          </div>
        </div>

        <div *ngIf="input.type == 'text-area'" class="form-outline mb-4">
          <label class="form-label" [for]="input.id"> {{ input.label }} </label>
          <textarea
            formControlName="{{ input.name }}"
            formControlName="{{ input.name }}"
            class="form-control"
            [id]="input.id"
            rows="4"
          ></textarea>
        </div>

        <div *ngIf="input.type == 'select-options'">
          <b> {{ input.label }} </b>
          <select
            formControlName="{{ input.name }}"
            class="form-select"
            attr.aria-label="{{ input.label }}"
          >
            <option selected>{{ input.defaultSelectedName }}</option>

            <option
              *ngFor="let option of input.options"
              value="{{ option.value }}"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div *ngIf="input.type == 'radio'">
          <b>{{ input.header }}</b>
          <div *ngFor="let radio of input.radios" class="form-check">
            <input
              formControlName="{{ input.name }}"
              class="form-check-input"
              type="radio"
              [name]="radio.name"
              [id]="radio.id"
              [value]="radio.value"
            />
            <label class="form-check-label" [for]="radio.id">
              {{ radio.label }}
            </label>
          </div>
        </div>

        <div *ngIf="input.type == 'checkbox'">
          <b> {{ input.header }} </b>
          <br />
          <!-- <div *ngFor="let checkbox of input.checkboxes" class="form-check"> -->
          <input
            formControlName="{{ input.name }}"
            class="form-check-input"
            type="checkbox"
            [value]="input.value"
            [id]="input.id"
            (change)="onCheckboxChange($event)"
          />
          <label class="form-check-label" [for]="input.id">
            {{ input.header }}
          </label>
          <!-- </div> -->
        </div>
      </ng-container>
    </div>

    <button
      [style.margin]="'100px'"
      (click)="submit()"
      type="submit"
      class="btn btn-primary btn-block mb-4"
    >
      {{ ngSubmitText }}
    </button>
  </form>`,
  styles: [],
})
export class NgFastFormComponent implements OnInit {
  @Input() ngInputDetails: any = [];
  @Input() ngInputLayout = '';
  @Input() ngSubmitText = 'Submit';
  myForm = new FormGroup({});
  formValue: any;

  constructor() {}

  ngOnInit(): void {
    this.ngInputDetails.forEach((control: any) => {
      {
        console.log('name is: ', control.name);
        this.myForm.addControl(control.name, new FormControl(''));
      }
    });

    this.ngInputDetails.forEach((element: any) => {
      {
        console.log(element.name);
      }
    });
  }

  // dans la fonction submit vous pouvez recupère les valeur du formulaire.

  submit() {
    this.formValue = this.myForm.value;
    console.log(this.myForm.value);
  }

  // Pour le checkbox
  onCheckboxChange(event: any) {
    console.log(event.target.checked);
  }
}

import { Component } from '@angular/core';
@Component({
  selector: 'rating',
  template: `
<ng-container *ngIf="rating < 1; else elseBlock"><star (click)=onClick(1)></star></ng-container>
<ng-template #elseBlock><starfill></starfill></ng-template>
<ng-container *ngIf="rating < 2; else elseBlock"><star (click)=onClick(2)></star></ng-container>
<ng-template #elseBlock><starfill></starfill></ng-template>
<ng-container *ngIf="rating < 3; else elseBlock"><star (click)=onClick(3)></star></ng-container>
<ng-template #elseBlock><starfill></starfill></ng-template>
<ng-container *ngIf="rating < 4; else elseBlock"><star (click)=onClick(4)></star></ng-container>
<ng-template #elseBlock><starfill></starfill></ng-template>
<ng-container *ngIf="rating < 5; else elseBlock"><star (click)=onClick(5)></star></ng-container>
<ng-template #elseBlock><starfill></starfill></ng-template>
`,
})
export class RatingComponent {
  rating = 0;
  onClick(ratingvalue) {
    this.rating = ratingvalue;
  }
}

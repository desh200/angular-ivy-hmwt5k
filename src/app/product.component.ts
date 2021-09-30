import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div class="media">
  <img class="align-self-start mr-3" src="{{data.imageUrl}}" src="..." alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">{{data.ProductName}}</h5>
    {{data.ProductRelease}}
    <rating
    [rating] ="data.rating" 
    [numOfReviews]="data.numOfReviews"
    ></rating><br>
    {{data.description}}
  </div>
</div>
  `,
  styles: [
    `.media
  { 
    margin-bottom:20px; 
  }
  `,
  ],
})
export class ProductComponent {
  @Input() data;
}

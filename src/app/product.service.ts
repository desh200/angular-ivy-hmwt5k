export class ProductService {
  getProducts() {
    return [
      {
        imageUrl: 'https://picsum.photos/200',
        productName: 'product1',
        ProductRelease: 'May 16,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200',
        productName: 'product2',
        ProductRelease: 'June 23,2017',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 2,
        numOfReviews: 6,
      },
      {
        imageUrl: 'https://picsum.photos/200',
        productName: 'product3',
        ProductRelease: 'Mar 16,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 3,
        numOfReviews: 7,
      },
      {
        imageUrl: 'https://picsum.photos/200',
        productName: 'product4',
        ProductRelease: 'May 18,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 5,
        numOfReviews: 2,
      },
    ];
  }
}

export class ProductService {
  getProducts() {
    //return [];

    return [
      {
        imageUrl: 'https://loremflickr.com/150/150?random=1',
        productName: 'product1',
        ProductRelease: 'May 16,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: 'https://loremflickr.com/150/150?random=2',
        productName: 'product2',
        ProductRelease: 'June 23,2017',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 2,
        numOfReviews: 6,
      },
      {
        imageUrl: 'https://loremflickr.com/150/150?random=3',
        productName: 'product3',
        ProductRelease: 'Mar 16,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 3,
        numOfReviews: 7,
      },
      {
        imageUrl: 'https://loremflickr.com/150/150?random=4',
        productName: 'product4',
        ProductRelease: 'May 18,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 5,
        numOfReviews: 2,
      },
    ];
  }
}

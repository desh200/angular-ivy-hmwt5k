export class ProductService {
  getProducts() {
    return [
      {
        imageUrl: 'https://loremflickr.com/150/150?random=1',
        productName: 'product1',
        ProductRelease: 'May 16,2016',
        description: 'cras sit amet nibh libero, in gravita...',
        rating: 4,
        numOfReviews: 2,
      },
    ];
  }
}

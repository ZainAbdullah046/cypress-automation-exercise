import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import ProductDetailPage from '../../../pages/ProductDetailPage'

describe('Test Case 16: Add review on product', () => {
  it('submits a product review successfully', () => {
    
    HomePage.visit()

    HomePage.clickProducts()

    ProductsPage.verifyAllProductsPageVisible()

    ProductsPage.clickViewProductOfFirstProduct()

    ProductDetailPage.verifyWriteReviewVisible()

    ProductDetailPage.fillReviewForm('Zain Abdullah', 'zain222046@gmail.com', 'Great product, highly recommended!')

    ProductDetailPage.clickSubmitReview()

    ProductDetailPage.verifyReviewSuccessMessage()
  })
})
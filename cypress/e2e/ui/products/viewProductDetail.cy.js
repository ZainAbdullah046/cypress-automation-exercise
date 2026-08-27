import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'
import ProductDetailPage from '../../../pages/ProductDetailPage'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('views product details from the products list', () => {
    
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    HomePage.clickProducts()

    ProductsPage.verifyAllProductsPageVisible()

    ProductsPage.verifyProductsListVisible()

      
    ProductsPage.clickViewProductOfFirstProduct()

    cy.url().should('include', '/product_details/')

    ProductDetailPage.verifyProductDetailVisible()
  })
})
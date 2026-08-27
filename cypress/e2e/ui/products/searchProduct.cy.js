import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'

describe('Test Case 9: Search Product', () => {
  it('searches for a product and shows matching results', () => {
    // Steps 1-3
    HomePage.visit()
    HomePage.verifyHomePageVisible()

    // Step 4
    HomePage.clickProducts()

    // Step 5
    ProductsPage.verifyAllProductsPageVisible()

    // Step 6
    ProductsPage.searchProduct('Blue Top')

    // Step 7
    ProductsPage.verifySearchedProductsVisible()

    // Step 8
    ProductsPage.verifyProductsListVisible()
  })
})
// viewBrandProducts test
import HomePage from '../../../pages/HomePage'
import ProductsPage from '../../../pages/ProductsPage'

describe('Test Case 14: View & Cart Brand Products', () => {
  it('navigates between brand pages successfully', () => {
 
    HomePage.visit()

    HomePage.clickProducts()

    ProductsPage.verifyBrandsVisible()

    ProductsPage.clickBrandByName('Polo')
    
    ProductsPage.verifyBrandPageVisible('Polo')

    ProductsPage.clickBrandByName('H&M')

    ProductsPage.verifyBrandPageVisible('H&M')
  })
})

interface ProductService {
    /**
     * @param  {number} productId
     * @param  {number} quantity
     * @returns null
     */
    decrementStock(productId: number, quantity: number): null
    
    /**
     * @param  {number} productId
     * @returns ProductDTO
     */
    getProductById(productId: number ): ProductDTO
}
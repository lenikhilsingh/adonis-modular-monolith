
export default interface ProductService {
    /**
     * @param  {number} productId
     * @param  {number} quantity
     * @returns null
     */
    decrementStock(productId: number, quantity: number): Promise<null>
    
    printProduct(data: {id: number, name: string})
    /**
     * @param  {number} productId
     * @returns ProductDTO
     */
    getProductById(productId: number ): Promise<ProductDTO>
}
import Product from "Src/Inventory/Domain/Models/Product";
import ProductServiceContract from "src/Inventory/Contracts/Interfaces/ProductService.interface"

export default class ProductService implements ProductServiceContract{
    async printProduct(data: { id: number; name: string; }) {

        console.log('Printing Products:\n\n',data)
    }
    /**
     * @param  {number} productId
     * @param  {number} quantity
     * @returns null
     */
    async decrementStock(productId: number, quantity: number): Promise<null> {
        let product = await Product.find(productId)
        if(!product) {throw "Invalid Product Id"}
        product.stock == 8
        await product.save()
        return null
    }

    /**
     * @param  {number} productId
     * @returns Promise
     */
    async getProductById(productId: number): Promise<ProductDTO> {
        let product = await Product.find(productId)
        if(!product) {throw "Invalid Product Id"}
        return new ProductDTO(
            product.id,
            product.name,
            product.price
        )
    }
}
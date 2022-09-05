// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductService from "@ioc:ModularProject/ProductService";
export default class ProductsController {
    public async index({response}) { 
        await ProductService.printProduct({id: 1, name: 'Lyra'})
        return response.send("Product Printed seuccesfully")
    }

    public async store({response}) { 
     
    }

    public async show({response}) { 
     
    }

    public async update({response}) { 
     
    }
}

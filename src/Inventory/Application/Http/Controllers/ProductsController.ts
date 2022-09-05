// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductService from "@ioc:ModularProject/ProductService"
export default class ProductsController {
    public async index({request, response}) { 
        let requestBody = request.all()

        console.log(requestBody)
        await ProductService.printProduct({id: 1, name: "Mazaa bottle"})
        return response.send(requestBody)
    }

    public async store({response}) { 
     
    }

    public async show({response}) { 
     
    }

    public async update({response}) { 
     
    }
}

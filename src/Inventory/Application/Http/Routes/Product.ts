import Route from "@ioc:Adonis/Core/Route"



Route.group(() => {
    
    Route.get("/products", "ProductsController.index")

  }).namespace('Src/Inventory/Application/Http/Controllers')
import Route from "@ioc:Adonis/Core/Route"



Route.group(() => {
    
    Route.get("/orders-product", "OrdersController.index")

  }).namespace('Src/Order/Application/Http/Controllers')
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column()
    public stock: number

    @column()
    public price: number

    @column()
    public name: string

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}

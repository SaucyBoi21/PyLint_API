import * as mongodb from "mongodb"

export interface Output {
    filename: string
    output: string
    _id?: mongodb.ObjectId
}
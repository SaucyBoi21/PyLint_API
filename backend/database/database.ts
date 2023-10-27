import * as mongodb from "mongodb"
import { Output } from "../interfaces/interfaces"

export const collections: {
    outputs?: mongodb.Collection<Output>
} = {}

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri)
    await client.connect()

    const db = client.db("Apparity_Pylint")
    await applySchemaValidation(db)

    const outputCollection = db.collection<Output>("output")
    collections.outputs = outputCollection
}

async function applySchemaValidation(db: mongodb.Db)  {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["filename", "output"],
            additionalProperties: false, 
            properties: {
                _id: {}, 
                filename: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                output: {
                    bsonType: "string",
                    description: "'output' is required and is a string"
                }

            }
        }
    }
    await db.command({
        collMod: "outputs",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("outputs", {validator: jsonSchema})
        }
    })
}

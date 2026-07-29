import mongoose from "mongoose";

export interface IUrl extends mongoose.Document {
    originalUrl: string;
    shortCode: string;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}

const urlSchema: mongoose.Schema = new mongoose.Schema<IUrl>(
    {
        originalUrl: {
            type: String,
            required: true,
        },
        shortCode: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        clicks: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

//automatically generate the type after updating the schema, so we don't have to manually update the type every time we change the schema
export type UrlType = mongoose.InferSchemaType<typeof urlSchema>;

export const UrlModel = mongoose.model<IUrl>("Url", urlSchema);
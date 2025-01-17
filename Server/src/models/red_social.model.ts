import mongoose, { Schema, Model } from 'mongoose';

interface RedSocial {
    nombre : string;
    enlace: string;
    foto: number;
    createdAt: Date;
    updatedAt: Date;
}
const schemaRedSocial = new Schema<RedSocial>({
    nombre:
    {
        type: String,
        required: true,
        trim: true
    },
    enlace:
    {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    foto:
    {
        type: Number,
        required: true,
        unique:true
    }
},
    {
        timestamps: true
    }
)
export default mongoose.model('RedSocial', schemaRedSocial);
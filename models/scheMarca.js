import mongoose from "mongoose";
const { Schema, model } = mongoose;

const marcaSchema = new Schema({
    idExp: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique:true },
        tradeMark: {
            exp: {
                type: String,
                required: true,
                trim: true,
                unique: true,
                index: { unique:true },
            },
            denomi: {
                type: String,
                trim: true,
                unique: true,
                index: { unique:true },
            },
            idioma: {
                type: String
            },
            tmOffice: {
                type: String
            },
            fecpres: {
                type: Date
            },
            codpais: {
                type: String
            },
            certi: {
                type: String
            },
            firtsCerti: {
                type: Date
            },
            tipoSigno: {
                type: String
            },
            tipoMarca: {
                type: String
            },
            pys: {
                type: Map,
                of: String
            },
            estatus: {
                type: String
            },
            vniza: {
                type: String
            },
            titulars: {
                type: Map,
                of: String
            },
            represents: {
                type: Map,
                of: String
            },
            vienaCodes: {
                type: Map,
                of: String
            }

        }
    },
      
});

export const marcaTM = model('marca', marcaSchema);
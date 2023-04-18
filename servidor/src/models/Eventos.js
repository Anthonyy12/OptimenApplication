const { Schema, model } = require("mongoose");

const EventoSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    
    },
    lugar: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Eventos", EventoSchema);

const { Schema, model } = require("mongoose");

const NoticiaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
    
    },
    informacion: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Noticia", NoticiaSchema);

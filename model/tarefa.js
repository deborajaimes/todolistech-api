import mongoose from "mongoose"

const schema = new mongoose.Schema({
    descricao: { 
        type: String,
        require: true
    },
    dataConclusao: {
        type: Date,
        require: false
    },
    dataPrevisao: {
        type: Date,
        require: false
    },

    concluido: {
        type: Boolean,
        require: true
    },
    autor:{
        type: ObjectID,
        ref: "Usuario",
        require:true
    }
})

export default mongoose.model("Tarefa", schema)
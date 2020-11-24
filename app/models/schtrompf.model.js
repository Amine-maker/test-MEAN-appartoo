module.exports = mongoose => {
    var schema =
      mongoose.Schema(
        {
          login : String,
          password : String,
          age: Number,
          famille: String,
          race: String,
          nourriture : String,
          schtrompf : []
        },
        { timestamps: true }
      )
    
      const Schtrompf = mongoose.model("schtrompf", schema);
      
  
    return Schtrompf;
  };
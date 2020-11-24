const { mongoose } = require(".");

module.exports = mongoose => {
    const Amis = mongoose.model("Amis", 
    mongoose.schema(
        {
            age: Number,
            famille: String,
            race: String,
            nourriture : String
          },
          { timestamps: true }
            )
        );
        
          return Amis;
    
}
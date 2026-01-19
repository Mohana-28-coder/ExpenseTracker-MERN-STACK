const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
    {
        title:{type:String,required:[true,"Title is required"],trim:true},
        amount:{type:Number,required:[true,"Amount is required"]},
        category:{type:String,required:[true,"Category is required"]},
        date:{type:Date,required:[true,"Date is required"]},
    },
    {
        timestamps: true
    }
)

module.exports =mongoose.model("Expense",expenseSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	qty: { type: Number, required: true },
	rate: { type: Number, required: true },
	total: { type: Number, required: true },
  });
  
  const invoiceSchema = new mongoose.Schema({
	products: [productSchema],
	grandTotal: { type: Number, required: true },
	grandGst: { type: Number, required: true },
  });

module.exports=mongoose.model("userInvoice", invoiceSchema);
import mongoose, {InferSchemaType} from "mongoose"

const restaurantSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restaurantName: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    deliveryPrice: { type: Number, required: true },
    estimatedDeliveryTime: { type: Number, required: true },
    menuItems: [{ type: mongoose.Schema.Types.ObjectId  , ref: "MenuItem"}],
    imageUrl: { type: String, required: true },
    lastUpdated: { type: Date, required: true },
})

const Restorant = mongoose.model("Restorant", restaurantSchema);

module.exports = {Restorant}
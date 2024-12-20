import { Schema, model } from "mongoose";

let collection = 'users';

let schema = new Schema({
  email: {type:String, required: true},
  password: {type:String, required: true},
  photo: {type: String, required: true},
  role:{type:Number},
  online: {type: Boolean}
}, {
  timeseries:true
});

let User =  model(collection, schema);
export default User;
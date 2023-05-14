const { Schema, model } = require("mongoose");


const showsSchema = new Schema(
    {
        showPost: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 255,
        },
        date: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 255
        },
        citystate: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 255
        },
       
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)



const Thought = model('shows', showsSchema);

module.exports = showsSchema;

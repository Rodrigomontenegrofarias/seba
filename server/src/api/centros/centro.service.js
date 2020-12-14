const Centro = require('./centro.model'); // post model

module.exports = {

    async createCentro(data) {
        return await Centro.create(data);
    },

    async updateCentro(id, data) {
        return await Centro.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteCentro(id) {
        return await Centro.deleteOne({ _id: id });
    },

    async getCentros() {
        return await Centro.find({});
    },

    async getCentro(id) {
        return await Centro.findOne({ _id: id });
    },

}
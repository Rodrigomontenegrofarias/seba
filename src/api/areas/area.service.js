const Area = require('./area.model'); // post model

module.exports = {

    async createArea(data) {
        return await Area.create(data);
    },

    async updateArea(id, data) {
        return await Area.findOneAndUpdate(
            { _id: id },
            data,
            { new: true });
    },

    async deleteArea(id) {
        return await Area.deleteOne({ _id: id });
    },

    async getAreas() {
        return await Area.find({});
    },

    async getArea(id) {
        return await Area.findOne({ _id: id });
    },

}
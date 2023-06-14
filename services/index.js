const Technology = require('./schemas/technology');

const getAllTechnologies = () => {
    return Technology.find();
};

const getTechnologyById = id => {
    return Technology.findOne({ _id: id });
};

const createTechnology = ({ name, amount }) => {
    return Technology.create({ name, amount });
};

const updateOneTechnology = (id, fields) => {
    return Technology.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeTechnology = id => {
    return Technology.findByIdAndRemove({ _id: id });
};

module.exports = {
    getAllTechnologies,
    getTechnologyById,
    createTechnology,
    updateOneTechnology,
    removeTechnology,
};

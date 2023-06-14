const {
    getAllTechnologies,
    getTechnologyById,
    createTechnology,
    removeTechnology,
    updateOneTechnology,
} = require('../services/index');

const getTechnologies = async (req, res, next) => {
    const technologies = await getAllTechnologies();
    res.status(201).json({
        contentType: 'application/json',
        ResponseBody: technologies,
    });
};

const getTechnology = async (req, res, next) => {
    const technology = await getTechnologyById(req.params.name);
    res.status(201).json({
        contentType: 'application/json',
        ResponseBody: technology,
    });
};

const addTechnology = async (req, res, next) => {
    const newTechnology = await createTechnology(req.body);
    res.status(201).json({
        contentType: 'application/json',
        ResponseBody: newTechnology,
    });
};

const updateTechnology = async (req, res, next) => {
    const updatedTechnology = await updateOneTechnology(
        req.params.technologyId,
        req.body
    );
    !updatedTechnology
        ? res.status(404).json({ message: "Couldn't update technology" })
        : res.status(201).json({
              contentType: 'application/json',
              ResponseBody: updatedTechnology,
          });
};

const deleteTechnology = async (req, res, next) => {
    const technologies = await removeTechnology(req.params.technologyId);
    !technologies
        ? res.status(404).json({ message: 'Technology not found' })
        : res.status(200).json({ message: 'Сontact deleted' });
};

module.exports = {
    getTechnologies,
    getTechnology,
    addTechnology,
    updateTechnology,
    deleteTechnology,
};

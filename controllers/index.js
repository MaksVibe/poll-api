const {
    getAllTechnologies,
    getTechnologyById,
    createTechnology,
    removeTechnology,
    updateOneTechnology,
} = require('../services/index');

const get = async (req, res, next) => {
    try {
        const technologies = await getAllTechnologies();
        res.json({
            status: 'success',
            code: 200,
            data: technologies,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const getById = async (req, res, next) => {
    const technology = await getTechnologyById(req.params.name);
    res.status(201).json({
        contentType: 'application/json',
        ResponseBody: technology,
    });
};

const create = async (req, res, next) => {
    const newTechnology = await createTechnology(req.body);
    res.status(201).json({
        contentType: 'application/json',
        ResponseBody: newTechnology,
    });
};

const update = async (req, res, next) => {
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

const remove = async (req, res, next) => {
    const technologies = await removeTechnology(req.params.technologyId);
    !technologies
        ? res.status(404).json({ message: 'Technology not found' })
        : res.status(200).json({ message: 'Сontact deleted' });
};

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
};

const {
    getTechnology,
    postTechnology,
    getTechnologyById,
    updateTechnology,
} = require('../services/index.js');

const get = async (req, res, next) => {
    try {
        const technology = await getTechnology(req.url.slice(1));

        res.json({
            status: 'Success',
            code: 200,
            data: technology,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const getById = async (req, res, next) => {
    const { params, url } = req;
    try {
        const technology = await getTechnologyById(url.slice(1), params.id);
        if (technology) {
            res.json({
                status: 'Success',
                code: 200,
                data: technology,
            });
        } else {
            res.status(404).json({
                status: 'Error',
                code: 404,
                message: `Not found technology id: ${id}`,
                data: 'Not Found',
            });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const technologies = await getTechnology(req.url.slice(1));

        if (
            technologies.some(
                tech => tech.name.toLowerCase() === req.body.name.toLowerCase()
            )
        ) {
            res.json({
                status: 'Bad Request',
                code: 400,
                data: `${req.body.name} exists`,
            });
            return;
        }

        await postTechnology(req.url.slice(1), req.body);
        res.json({
            status: 'Created',
            code: 201,
            data: `${req.body.name} created`,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const update = async (req, res, next) => {
    const { id } = req.params;
    const { spec, data } = req.body;
    try {
        const technology = await updateTechnology(spec, id, {
            id: data.id,
            name: data.name,
            amount: data.amount + 1,
        });
        if (technology) {
            res.json({
                status: 'success',
                code: 200,
                data: technology,
            });
        } else {
            res.status(404).json({
                status: 'error',
                code: 404,
                message: `Not found technology with id: ${req.params.id}`,
                data: 'Not Found',
            });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = {
    get,
    getById,
    create,
    update,
};

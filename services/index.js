const { Frontend, Backend, QA, PM, Design } = require('./schemas/technology');

const getTechnology = spec => {
    switch (spec) {
        case 'frontend':
            return Frontend.find();
        case 'backend':
            return Backend.find();
        case 'qa':
            return QA.find();
        case 'pm':
            return PM.find();
        case 'design':
            return Design.find();
    }
};

const getTechnologyById = (spec, id) => {
    switch (spec.slice(0, spec.indexOf('/'))) {
        case 'frontend':
            return Frontend.findOne({
                _id: id,
            });
        case 'backend':
            return Backend.findOne({
                _id: id,
            });
        case 'qa':
            return QA.findOne({
                _id: id,
            });
        case 'pm':
            return PM.findOne({
                _id: id,
            });
        case 'design':
            return Design.findOne({
                _id: id,
            });
    }
};

const postTechnology = (spec, data) => {
    switch (spec) {
        case 'frontend':
            return Frontend.create(data);
        case 'backend':
            return Backend.create(data);
        case 'qa':
            return QA.create(data);
        case 'pm':
            return PM.create(data);
        case 'design':
            return Design.create(data);
    }
};

const updateTechnology = (spec, id, data) => {
    switch (spec) {
        case 'frontend':
            return Frontend.findByIdAndUpdate({ _id: id }, data, {
                new: true,
            });
        case 'backend':
            return Backend.findByIdAndUpdate({ _id: id }, data, {
                new: true,
            });
        case 'qa':
            return QA.findByIdAndUpdate({ _id: id }, data, { new: true });
        case 'pm':
            return PM.findByIdAndUpdate({ _id: id }, data, { new: true });
        case 'design':
            return Design.findByIdAndUpdate({ _id: id }, data, {
                new: true,
            });
    }
};

module.exports = {
    getTechnology,
    postTechnology,
    getTechnologyById,
    updateTechnology,
};

const Planets = require("../models/planets.model");
const asyncHandle = require("../middlewares/async");
const ErrorResponse = require("../utils/ErrorResponse");

// GET Planets 
exports.getPlanets = asyncHandle(async (req, res, next) => {
    const planets = await Planets.find();
    if (!planets || planets.length === 0) {
        return next(new ErrorResponse("Planets not defined!", 404));
    }
    res.status(200).json({
        success: true,
        count: planets.length,
        data: planets,
    });
});

// GET planets ById 
exports.getByIdPlanets = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const planets = await Planets.findById(id);
    if (!planets) {
        return next(new ErrorResponse(`No planet found with id ${id}!`, 404));
    }
    res.status(200).json({
        success: true,
        data: planets,
    });
})

// POST create new planets
exports.createNewPlanets = asyncHandle(async (req, res, next) => {
    const { name, mass } = req.body;
    if (!name || !mass) {
        return next(new ErrorResponse('Please fill out all fields correctly!', 400));
    }
    const newPlanets = await Planets.create({ name, mass });
    res.status(201).json({
        success: true,
        data: newPlanets,
    });
})

// PUT update planets ById
exports.updatePlanets = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const { name, mass } = req.body;
    let planets = await Planets.findById(id);
    if (!planets) {
        return next(new ErrorResponse(`No planet found with id ${id}!`, 404));
    }
    planets = await Planets.findByIdAndUpdate(
        id,
        { name, mass },
        { new: true }
    );
    res.status(200).json({
        success: true,
        data: planets,
    });
});

// DELETE planets ById 
exports.deletePlanets = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const planets = await Planets.findById(id);
    if (!planets) {
        return next(new ErrorResponse(`No planet found with id ${id}!`, 404));
    }
    await planets.deleteOne();
    res.status(200).json({
        success: true,
        message: `Planet with id ${id} successfully deleted!`,
    });
})
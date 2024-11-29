const Stars = require("../models/stars.model");
const asyncHandle = require("../middlewares/async");
const ErrorResponse = require("../utils/ErrorResponse");

// GET stars 
exports.getStars = asyncHandle(async (req, res, next) => {
    const stars = await Stars.find();
    if (!stars || stars.length === 0) {
        return next(new ErrorResponse("Stars not defined!", 404));
    }
    res.status(200).json({
        success: true,
        count: stars.length,
        data: stars,
    });
});

// GET stars ById 
exports.getByIdStars = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const stars = await Stars.findById(id);
    if (!stars) {
        return next(new ErrorResponse(`No star found with id ${id}!`, 404));
    }
    res.status(200).json({
        success: true,
        data: stars,
    });
})

// POST create new stars 
exports.createNewStars = asyncHandle(async (req, res, next) => {
    const { name, size } = req.body;
    if (!name || !size) {
        return next(new ErrorResponse('Please fill out all fields correctly!', 400));
    }
    const newStars = await Stars.create({ name, size });
    res.status(201).json({
        success: true,
        data: newStars,
    });
})

// PUT update stars ById
exports.updateStars = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const { name, size } = req.body;
    let stars = await Stars.findById(id);
    if (!stars) {
        return next(new ErrorResponse(`No star found with id ${id}!`, 404));
    }
    stars = await Stars.findByIdAndUpdate(
        id,
        { name, size },
        { new: true }
    );
    res.status(200).json({
        success: true,
        data: stars,
    });
});

// DELETE stars ById 
exports.deleteStars = asyncHandle(async (req, res, next) => {
    const { id } = req.params;
    const stars = await Stars.findById(id);
    if (!stars) {
        return next(new ErrorResponse(`No star found with id ${id}!`, 404));
    }
    await stars.deleteOne();
    res.status(200).json({
        success: true,
        message: `Star with id ${id} successfully deleted!`,
    });
})
const { Router } = require("express");
const router = Router();
const { 
    getStars,
    getByIdStars,
    createNewStars,
    updateStars,
    deleteStars 
} = require("../controllers/stars.controller");

/**
 * @swagger
 * /api/v1/stars:
 *   get:
 *     summary: Get list of all stars
 *     responses:
 *       200:
 *         description: A list of stars
 */
router.get("/stars", getStars);

/**
 * @swagger
 * /api/v1/stars/{id}:
 *   get:
 *     summary: Get a star by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single star
 *       404:
 *         description: Star not found
 */
router.get("/stars/:id", getByIdStars);

/**
 * @swagger
 * /api/v1/stars/create:
 *   post:
 *     summary: Create a new star
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               size:
 *                 type: string
 *               planets:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Star created successfully
 */
router.post("/stars/create", createNewStars);

/**
 * @swagger
 * /api/v1/stars/update/{id}:
 *   put:
 *     summary: Update an existing star
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               size:
 *                 type: string
 *               planets:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Star updated successfully
 *       404:
 *         description: Star not found
 */
router.put("/stars/update/:id", updateStars);

/**
 * @swagger
 * /api/v1/stars/delete/{id}:
 *   delete:
 *     summary: Delete a star by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Star deleted successfully
 *       404:
 *         description: Star not found
 */
router.delete("/stars/delete/:id", deleteStars);

module.exports = router;
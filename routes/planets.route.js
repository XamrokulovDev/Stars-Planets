const { Router } = require("express");
const router = Router();
const { 
    getPlanets,
    getByIdPlanets,
    createNewPlanets,
    updatePlanets,
    deletePlanets 
} = require("../controllers/planets.controller");

/**
 * @swagger
 * /api/v1/planets:
 *   get:
 *     summary: Get list of all planets
 *     responses:
 *       200:
 *         description: A list of planets
 */
router.get("/planets", getPlanets);

/**
 * @swagger
 * /api/v1/planets/{id}:
 *   get:
 *     summary: Get a planet by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The planet ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single planet
 *       404:
 *         description: Planet not found
 */
router.get("/planets/:id", getByIdPlanets);

/**
 * @swagger
 * /api/v1/planets/create:
 *   post:
 *     summary: Create a new planet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               mass:
 *                 type: string
 *               stars:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Planet created successfully
 */
router.post("/planets/create", createNewPlanets);

/**
 * @swagger
 * /api/v1/planets/update/{id}:
 *   put:
 *     summary: Update an existing planet
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The planet ID
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
 *               mass:
 *                 type: string
 *               stars:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Planet updated successfully
 *       404:
 *         description: Planet not found
 */
router.put("/planets/update/:id", updatePlanets);

/**
 * @swagger
 * /api/v1/planets/delete/{id}:
 *   delete:
 *     summary: Delete a planet by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The planet ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Planet deleted successfully
 *       404:
 *         description: Planet not found
 */
router.delete("/planets/delete/:id", deletePlanets);

module.exports = router;
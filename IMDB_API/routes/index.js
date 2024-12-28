const express = require("express");
const Model = require("../model/index");

const router = express.Router();

router.post("/movie", async (req, res) => {
  const data = new Model({
    title: req.body.title,
    year: req.body.year,
    runTime: req.body.runTime,
    genre: req.body.genre,
    writer: req.body.writer,
    actors: req.body.actors,
    plot: req.body.plot,
    imdbRating: req.body.imdbRating,
    imdbID: req.body.imdbID,
    images: req.body.images,
  });

  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching movies:", error); // Log error
    res.status(500).json({ message: error.message });
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.error("Error fetching movies:", error); // Log error
    res.status(500).json({ message: error.message });
  }
});
router.put("/movie/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    console.error("Error fetching movies:", error); // Log error
    res.status(500).json({ message: error.message });
  }
});
router.delete("/movie/:id", async (req, res) => {
  try {
    const result = await Model.findByIdAndDelete(req.params.id);
    res.send("Data deleted successfully");
  } catch (error) {
    console.error("Error fetching movies:", error); // Log error
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

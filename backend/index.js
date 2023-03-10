const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const PORT = 8080;
const app = express();
const TaskModel = require("./models/task");
require("./conn");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json({
      tasks: tasks.map((task) => ({
        id: task.id,
        text: task.text,
      })),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Failed to fetch data." });
  }
});

app.post("/task", async (req, res) => {
  const text = req.body.text;
  console.log(req.body.text);
  const task = new TaskModel({
    _id: new mongoose.Types.ObjectId(),
    text,
  });

  try {
    await task.save().catch((e) => console.log(e));
    res.status(201).json({
      message: "Task has been added",
      task: { _id: task._id, text: text },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Failed to save." });
  }
});
app.listen(PORT,()=>console.log("conen id t",PORT))



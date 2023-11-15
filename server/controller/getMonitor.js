const Monitor = require("../model/monitor");

const getMonitors = async (req, res) => {
  try {
    const monitors = await Monitor.find();
    res.json({ monitors });
  } catch (error) {
    console.error("Error fetching monitors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getMonitors = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const monitors = await Monitor.findById(id).populate("user");
//     console.log(monitors);
//     res.json({ monitor: monitors });
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = { getMonitors };

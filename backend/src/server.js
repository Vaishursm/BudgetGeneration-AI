const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const bpFixedExpenses = require("./routes/bpfixedexpenses");
const categorySheets = require("./routes/categorysheets");
const fixedexpenses =  require("./routes/fixedexpenses");
const hiredEquipments = require("./routes/hiredequipments");
const lightingEquipments =  require("./routes/lightningequipments");
const majorEquipments =  require("./routes/majorequipments");
const minorEquipments = require("./routes/minorequipments");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Mount routes
app.use("/projects", projectRoutes);
app.use("/bpfixedexpenses", bpFixedExpenses);
app.use("/categorysheets", categorySheets);
app.use("/fixedexpenses", fixedexpenses);
app.use("/hiredequipments", hiredEquipments);
app.use("/lightingequipments", lightingEquipments);
app.use("/majorequipments", majorEquipments);
app.use("/minorequipments", minorEquipments);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

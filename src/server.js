import "dotenv/config";
import app from "./app";

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log("App On!");
  console.log(`http://localhost:${port}`);
});

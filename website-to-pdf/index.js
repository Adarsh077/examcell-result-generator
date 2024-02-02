const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get("/semesters/:semesterId", async (req, res) => {
  const { semesterId } = req.params;
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "/usr/bin/google-chrome",
    args: ["--no-sandbox"],
  });

  // Create a new page
  const page = await browser.newPage();

  // Website URL to export as pdf
  const website_url = `http://localhost:5174/semester/${semesterId}`;

  // Open URL in current page
  await page.goto(website_url, { waitUntil: "networkidle0" });

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: "result.pdf",
    printBackground: true,
    width: 1980,
    margin: {
      top: "50px",
      right: "100px",
      bottom: "50px",
      left: "100px",
    },
  });

  // Close the browser instance
  await browser.close();

  res.send("success");
});

app.listen(3001, () => {
  console.log("listening");
});

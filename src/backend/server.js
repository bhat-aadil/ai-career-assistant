import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import PDFDocument from "pdfkit";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const distPath = path.join(__dirname, "../../dist");
app.use("/assets", express.static(path.join(distPath, "assets")));
app.use(express.static(distPath));

app.use((req, res, next) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const Gemini_Key = process.env.GENERATIVE_AI_KEY;
const genAI = new GoogleGenerativeAI(Gemini_Key);

async function generateGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// to tailor resume
app.post("/api/gemini/tailor-resume", async (req, res) => {
  const { resume, jobDescription } = req.body;
  const prompt = `You are a professional resume editor. Given the resume and the job description, tailor the resume to better align with the job.\n\nResume:\n${resume}\n\nJob Description:\n${jobDescription}`;

  try {
    const result = await generateGeminiResponse(prompt);
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate tailored resume." });
  }
});

// to tailor cover letter
app.post("/api/gemini/generate-cover-letter", async (req, res) => {
  const { resume, jobDescription } = req.body;
  const prompt = `You are a career assistant. Generate a personalized cover letter using the resume and job description.\n\nResume:\n${resume}\n\nJob Description:\n${jobDescription}`;

  try {
    const result = await generateGeminiResponse(prompt);
    result.replace(/[*?]/g, "");
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate cover letter." });
  }
});

// POST /api/generate-pdf
app.post("/api/generate-pdf", (req, res) => {
  const { content, filename } = req.body;

  if (!content) {
    return res.status(400).json({ error: "No content provided" });
  }

  const doc = new PDFDocument();

  // Set headers to indicate a file download
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${filename || "document"}.pdf"`
  );

  // Pipe the PDF stream directly to the response
  doc.pipe(res);

  // Write text into the PDF
  doc.font("Times-Roman").fontSize(12).text(content, {
    align: "left",
    lineGap: 4,
  });

  doc.end(); // Finalize the PDF
});

app.use((req, res, next) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

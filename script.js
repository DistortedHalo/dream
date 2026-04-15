import { Analytics } from "@vercel/analytics/next"

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1c0g9OpI7mQuXdoqasQnbNrtVBuLGMAzb";
const button = document.getElementById("downloadButton");
if (button) {
  button.href = DOWNLOAD_URL;
}

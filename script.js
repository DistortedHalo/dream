import { Analytics } from "@vercel/analytics/next"

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1F5Ped5jvofvtOooMGrW8euLASROisNr6";
const button = document.getElementById("downloadButton");
if (button) {
  button.href = DOWNLOAD_URL;
}

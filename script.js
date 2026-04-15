import { Analytics } from "@vercel/analytics/next";

const getAnalytics = () => {
  return <Analytics />;
};

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1-Cm1_AFMAnzKp6cw2dtkB0OplDouXb55";
const button = document.getElementById("downloadButton");
if (button) {
  button.href = DOWNLOAD_URL;
}

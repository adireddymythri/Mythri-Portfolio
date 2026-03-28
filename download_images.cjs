const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  "https://mythri-portfolio.vercel.app/nm.png",
  "https://mythri-portfolio.vercel.app/my3.jpg",
  "https://mythri-portfolio.vercel.app/github.png",
  "https://mythri-portfolio.vercel.app/leetcode.png",
  "https://mythri-portfolio.vercel.app/Hackerrank.png",
  "https://mythri-portfolio.vercel.app/geeksforgeeks.png",
  "https://mythri-portfolio.vercel.app/linkedin.png",
  "https://mythri-portfolio.vercel.app/illustration.png",
  "https://mythri-portfolio.vercel.app/proj1.png",
  "https://mythri-portfolio.vercel.app/smart_chatbot.png",
  "https://mythri-portfolio.vercel.app/portofolio.png",
  "https://mythri-portfolio.vercel.app/ATS.png",
  "https://mythri-portfolio.vercel.app/exp.png",
  "https://mythri-portfolio.vercel.app/festivepal.png",
  "https://mythri-portfolio.vercel.app/Atlassian.png",
  "https://mythri-portfolio.vercel.app/smart_silver.png",
  "https://mythri-portfolio.vercel.app/gdg%20certi.jpg",
  "https://mythri-portfolio.vercel.app/java_foun.png"
];

const publicDir = 'c:\\Users\\nagam\\Downloads\\Mythri-Portfolio-main\\Mythri-Portfolio-main\\public';

urls.forEach(url => {
  const filename = decodeURIComponent(path.basename(new URL(url).pathname));
  const dest = path.join(publicDir, filename);
  
  https.get(url, (res) => {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded ' + filename);
    });
  }).on('error', (err) => {
    console.error('Error downloading ' + url + ': ' + err.message);
  });
});

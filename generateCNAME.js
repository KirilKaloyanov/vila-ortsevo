// generateCNAME.js

import fs from "fs";

// Define the domain name
const domain = "www.vilaortsevo.com";

// Generate the content of the CNAME file
const content = domain + "\n";

// Write the content to the CNAME file
fs.writeFileSync("docs/CNAME", content);

console.log("CNAME file generated successfully.");

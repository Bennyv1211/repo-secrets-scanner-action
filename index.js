const { exec } = require('child_process');

// Function to run TruffleHog for secrets scanning
function runTruffleHog(repoUrl) {
    exec(`trufflehog --json ${repoUrl}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog: ${stderr}`);
            process.exit(1);
        }
        console.log(`TruffleHog Results: ${stdout}`);
    });
}

// GitHub passes arguments like this to our script
const repoUrl = process.argv[2];

if (!repoUrl) {
    console.error("Usage: node index.js <repository_url>");
    process.exit(1);
}

runTruffleHog(repoUrl);

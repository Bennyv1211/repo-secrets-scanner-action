const { exec } = require('child_process');
const path = require('path');

// Function to run TruffleHog for secrets scanning
function runTruffleHog() {
    // Assuming the code has been checked out into the current directory
    const repoPath = path.resolve('.');
    exec(`trufflehog --json ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog: ${stderr}`);
            process.exit(1);
        }
        console.log(`TruffleHog Results: ${stdout}`);
    });
}

runTruffleHog();

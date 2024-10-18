const { exec } = require('child_process');
const path = require('path');

// Function to run TruffleHog for secrets scanning
function runTruffleHog() {
    // Set the repository path to the current working directory
    const repoPath = path.resolve('.');

    console.log(`Running TruffleHog in directory: ${repoPath}`);

    // Try running TruffleHog without `--json` to see if that helps
    exec(`trufflehog ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog:\n${stderr}`);
            console.error(`Full error details:\n${error}`);
            console.error(`Standard Output:\n${stdout}`);
            process.exit(1);
        } else {
            console.log(`TruffleHog Results:\n${stdout}`);
        }
    });
}

runTruffleHog();

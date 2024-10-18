const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Function to run TruffleHog for secrets scanning
function runTruffleHog() {
    // Set the repository path to the current working directory
    const repoPath = path.resolve('.');

    console.log(`Running TruffleHog in directory: ${repoPath}`);

    // Run TruffleHog on the checked-out repository code in the current directory
    exec(`trufflehog ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog:\n${stderr}`);
            console.error(`Full error details:\n${error}`);
            process.exit(1);
        } else {
            console.log(`TruffleHog Results:\n${stdout}`);

            // Write the output to a file named trufflehog-results.txt
            fs.writeFileSync('trufflehog-results.txt', stdout);
            console.log('Results saved to trufflehog-results.txt');
        }
    });
}

runTruffleHog();

const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

function runTruffleHog() {
    const repoPath = path.resolve('.');
    console.log(`Running TruffleHog in directory: ${repoPath}`);

    exec(`trufflehog ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog:\n${stderr}`);
            process.exit(1);
        } else {
            console.log(`TruffleHog Results:\n${stdout}`);
            // Write the output to a file
            fs.writeFileSync('trufflehog-results.txt', stdout);
        }
    });
}

runTruffleHog();

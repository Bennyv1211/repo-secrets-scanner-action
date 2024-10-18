const { exec } = require('child_process');
const path = require('path');

function runTruffleHog() {
    // Set the repository path to the current working directory
    const repoPath = path.resolve('.');

    // Run TruffleHog on the checked-out repository code in the current directory
    exec(`trufflehog --json ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running TruffleHog: ${stderr}`);
            process.exit(1);
        } else {
            console.log(`TruffleHog Results:\n${stdout}`);
        }
    });
}

runTruffleHog();

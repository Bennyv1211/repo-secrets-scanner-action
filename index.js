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
            // Write any errors to the output file for more debugging information
            fs.writeFileSync('trufflehog-results.txt', `Error running TruffleHog:\n${stderr}`);
            process.exit(1);
        } else {
            console.log(`TruffleHog Results:\n${stdout}`);

            if (stdout && stdout.trim().length > 0) {
                // Write the output to a file named trufflehog-results.txt if there's valid output
                fs.writeFileSync('trufflehog-results.txt', stdout);
                console.log('Results successfully saved to trufflehog-results.txt');
            } else {
                // Indicate that no secrets were found
                fs.writeFileSync('trufflehog-results.txt', 'No secrets detected by TruffleHog.');
                console.log('No secrets were detected by TruffleHog.');
            }

            // Log the directory content to verify the file is created
            console.log('Current directory content after writing results:');
            fs.readdirSync('.').forEach(file => {
                console.log(file);
            });
        }
    });
}

runTruffleHog();

# Secrets Scanner Action

This GitHub Action scans your repository for secrets and sensitive data using TruffleHog.

## Inputs

### `github_token`

**Required**: The GitHub token for accessing the repository.

## Example Usage

```yaml
name: 'Scan Repository for Secrets'
on: [push, pull_request]
jobs:
  scan_secrets:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Run Secrets Scanner
        uses: YourUsername/repo-secrets-scanner-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

#!/bin/bash

# Load common environment variables
source "$(dirname "${BASH_SOURCE[0]}")/load_env.sh"

# If GITHUB_PERSONAL_ACCESS_TOKEN is not set, exit
if [ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
  echo "Error: GITHUB_PERSONAL_ACCESS_TOKEN is not set."
  exit 1
fi

# echo the GITHUB_PERSONAL_ACCESS_TOKEN
echo "GITHUB_PERSONAL_ACCESS_TOKEN: $GITHUB_PERSONAL_ACCESS_TOKEN"

# Start the GitHub MCP server with the loaded environment variables

# run the command
env GITHUB_PERSONAL_ACCESS_TOKEN="$GITHUB_PERSONAL_ACCESS_TOKEN" docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server:v0.1.1

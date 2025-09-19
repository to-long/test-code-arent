#!/bin/bash

# Load common environment variables
source "$(dirname "${BASH_SOURCE[0]}")/load_env.sh"

# If KIBELA_TOKEN is not set, exit
if [ -z "$KIBELA_TOKEN" ]; then
  echo "Error: KIBELA_TOKEN is not set."
  exit 1
fi

# If KIBELA_TEAM is not set, set it to "moneyforward"
if [ -z "$KIBELA_TEAM" ]; then
  KIBELA_TEAM="moneyforward"
fi

# Start the Glean MCP server with the loaded environment variables
env KIBELA_TOKEN="$KIBELA_TOKEN" KIBELA_TEAM="$KIBELA_TEAM" npx -y @kiwamizamurai/mcp-kibela-server@1.0.0

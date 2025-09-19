#!/bin/bash

# Load common environment variables
source "$(dirname "${BASH_SOURCE[0]}")/load_env.sh"

# If FIGMA_API_KEY is not set, exit
if [ -z "$FIGMA_API_KEY" ]; then
  echo "Error: FIGMA_API_KEY is not set."
  exit 1
fi

# Start the Figma MCP server with the loaded environment variables
env FIGMA_API_KEY="$FIGMA_API_KEY" npx -y figma-developer-mcp --stdio
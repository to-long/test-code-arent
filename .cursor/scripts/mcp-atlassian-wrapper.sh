#!/bin/bash

# Load common environment variables
source "$(dirname "${BASH_SOURCE[0]}")/load_env.sh"

# Check if required variables are set
if [ -z "$ATLASSIAN_USERNAME" ] || [ -z "$ATLASSIAN_TOKEN" ] || [ -z "$JIRA_URL" ]; then
  echo "Error: Required environment variables are not set. Please check your .env file."
  exit 1
fi

# Run the MCP with appropriate parameters
uvx mcp-atlassian@0.11.9 \
  --transport stdio \
  --jira-url="$JIRA_URL" \
  --jira-username="$ATLASSIAN_USERNAME" \
  --jira-token="$ATLASSIAN_TOKEN"

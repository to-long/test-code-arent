#!/bin/bash

# Define script directory (.cursor)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Script directory: $SCRIPT_DIR"

PARENT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"
echo "Parent directory: $PARENT_DIR"

# Check if .env exists in .cursor directory
if [ ! -f "$PARENT_DIR/.env" ]; then
  echo "Error: .env file not found at $PARENT_DIR/.env"
  exit 1
fi

# Load environment variables from .env in .cursor directory
source "$PARENT_DIR/.env"

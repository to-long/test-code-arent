## Cursor and MCP Setup

### Getting Started with Cursor
1. Download and install Cursor
2. Apply Cursor Business Plan (check out the #cursor_ai channel at Slack)
3. Open this project in Cursor
4. Use AI features to help with coding, refactoring, and understanding the codebase

### MCP (Model Context Protocol)
MCP provides custom tooling for Cursor's AI Agent, allowing it to interact with external services and enhance its capabilities for specific tasks.

Available MCPs in this Repository
Based on our .cursor/mcp.json configuration, we have the following MCPs set up:

| MCP                     | Description                                                                         | Environment Variables         | Usage                                                        |
| ----------------------- | ----------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------ |
| **Figma Developer MCP** | Enables the AI to interact with Figma designs                                       | `FIGMA_API_KEY`               | Ask AI about Figma designs, export components, etc.          |
| **Github MCP**          | Connects to Github for PR creation, etc                                             | `GITHUB_PERSONAL_ACCESS_TOKEN`| Ask AI to manage Pull Requests                                |
| **Atlassian MCP**       | Integrates with Atlassian products (Jira, Confluence) using a custom wrapper script | `ATLASSIAN_USERNAME`, `ATLASSIAN_TOKEN`   | Ask AI to look up issues or documentation in Jira/Confluence |
| **Kibela MCP**          | Integrates with Kibela knowledge base                                               | `KIBELA_TEAM`, `KIBELA_TOKEN` | Ask AI to search and interact with Kibela documentation      |

#### Setting up Environment Variables

To use these MCPs effectively, set the required environment variables in a `.env` file as shown below. The full list of environment variables can be found in `.env.local` in the root folder.

```plaintext
FIGMA_API_KEY=your_figma_api_key
KIBELA_TOKEN=your_kibela_team
ATLASSIAN_USERNAME=your_atlassion_user_name
ATLASSIAN_TOKEN=your_atlassian_token
CONFLUENCE_URL=https://moneyforward.atlassian.net/wiki
JIRA_URL=https://moneyforward.atlassian.net
GITHUB_PERSONAL_ACCESS_TOKEN=your_github_token
```

#### Token/Key Retrieval Instructions

- **Figma**: Follow the instructions on Figma's help page to manage personal access tokens.
- **Atlassian**: Follow the instructions on Atlassian's support page to manage API tokens.
- **Kibela**:
  - For `KIBELA_TEAM`, use your Kibela team name (e.g., "moneyforward").
  - For `KIBELA_TOKEN`, generate an access token from your Kibela settings page.
- **GitHub**:
  - In GitHub's token setting page, apply for a new fine-grained token.
  - Select `moneyforward` as the Resource owner.
  - For Repository access, select "Only select repositories," and choose `moneyforward/conac_frontend` and `moneyforward/conac_backend`.
  - In Repository permissions, grant the Pull requests permission.
  - Then, in Slack's `contact_cio_managed-tools` channel, raise a request to get approval. See example [here](https://moneyforward.slack.com/archives/C03NSKB715Z/p1743561170092869).

> **Note**: GitHub MCP currently has an authentication issue that prevents creating pull requests if the repo is under an organization. Other GitHub operations work normally. For details, see [here](https://github.com/orgs/community/discussions/24549).
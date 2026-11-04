#!/usr/bin/env bash
# Installe (ou met à jour) l'outillage agentic dans .claude/ — à lancer depuis la racine du repo.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p .claude
cp -r agentic/agents agentic/skills .claude/
cp agentic/settings.json .claude/settings.json
cp agentic/mcp.json .mcp.json
echo "✔ Agents : $(ls .claude/agents | tr '\n' ' ')"
echo "✔ Skills : $(ls .claude/skills | tr '\n' ' ')"
echo "✔ Serveur MCP m2-sources déclaré dans .mcp.json (actif après la tâche C00)"
echo "→ Lance 'claude' à la racine du repo puis tape /etat-projet"

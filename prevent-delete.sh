# Prevent deletion of vercel.json from being committed
# https://tone-row.com/blog/vite-vercel-client-side-routing-serverless-api

#D       vercel.json
REGEXP="^D[[:space:]]+vercel.json$"

if git diff --cached --name-status | grep -qE $REGEXP; then
  git reset -- vercel.json
  exit 0
fi
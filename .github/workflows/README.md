# GitHub Actions Workflows

## Sync Disposable Email Domains

**File**: `sync-disposable-domains.yml`

This workflow automatically keeps the disposable email domains list up to date.

### How it works

1. **Scheduled runs**: Runs weekly on Mondays at 2 AM UTC
2. **Manual trigger**: Can be triggered manually via GitHub Actions UI
3. **Automatic sync**: Downloads latest domains from [disposable/disposable-email-domains](https://github.com/disposable/disposable-email-domains) - a comprehensive list with 70k+ domains
4. **Change detection**: Only commits if there are actual changes
5. **Direct push**: Commits directly to main branch (no PR needed)

### Triggers

#### Weekly Schedule
The workflow runs automatically every Monday at 2 AM UTC to check for updates.

#### Manual Trigger
You can manually trigger the workflow:
1. Go to **Actions** → **Sync Disposable Email Domains**
2. Click **Run workflow**
3. Select the branch and click **Run workflow**

#### Repository Dispatch (Advanced)
For real-time updates when the upstream repository changes, you can set up a webhook:

1. Go to the [disposable-email-domains repository](https://github.com/disposable/disposable-email-domains)
2. Fork it or create a GitHub App that watches for changes
3. Send a repository dispatch event to trigger this workflow:

```bash
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer YOUR_GITHUB_TOKEN" \
  https://api.github.com/repos/YOUR_USERNAME/diktat.ai/dispatches \
  -d '{"event_type":"sync-domains"}'
```

### What the workflow does

1. ✅ Checks out the repository
2. ✅ Sets up Node.js
3. ✅ Calculates hash of current domains file
4. ✅ Runs `npm run domains:sync` to fetch latest domains
5. ✅ Compares old vs new hash
6. ✅ If changed: Commits and pushes directly to main
7. ✅ If unchanged: Logs that everything is up to date

### Commit Details

When changes are detected, the workflow commits directly to main with:
- **Message**: "chore: update disposable email domains list"
- **Author**: github-actions[bot]
- **Files changed**: Only `server/utils/disposable-domains.txt`

### Manual Sync

You can also sync manually locally:

```bash
npm run domains:sync
```

### Permissions Required

The workflow needs the following permissions (already configured):
- `contents: write` - To commit and push changes to main

These are provided automatically via `GITHUB_TOKEN`.

### Troubleshooting

#### Workflow not running
- Check that GitHub Actions is enabled for your repository
- Verify the schedule cron syntax is correct
- Check the Actions tab for any errors

#### Changes not being pushed
- Verify the `GITHUB_TOKEN` has proper permissions
- Check that there are actual changes in the domains file
- Review workflow logs in the Actions tab
- Ensure branch protection rules allow the workflow to push to main

#### Push conflicts
- If there's a conflict, the workflow will fail
- Manually resolve conflicts and re-run the workflow

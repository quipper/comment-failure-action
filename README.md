![build-test](https://github.com/quipper/comment-failure-action/workflows/build-test/badge.svg)

# Comment Failure Action

Add comments for what workflows and jobs failed in pull request.

## Demo

Please see https://github.com/quipper/comment-failure-action/pull/6.

## Usage

```yaml
on:
  workflow_run:
    workflows:
      - your-workflow  # Replace with your test workflow's name
    types: [ completed ]

jobs:
  comment-failure:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - uses: quipper/comment-failure-action@v0.0.1
        with:
          api-token: ${{ secrets.YOUR_GITHUB_API_TOKEN }} # Replace with your secret's name
```

### Inputs

| Name      | Required | Default | Description                                      |
|-----------|----------|---------|--------------------------------------------------|
| api-token | `true`   |         | GitHub API token granted `repo` or `public_repo` |

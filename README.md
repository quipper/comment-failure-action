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
    runs-on: ubuntu-latest
    steps:
      - uses: quipper/comment-failure-action@v0.1.1
```

If you want to use your own personal access token, specify it with `api-token`:

```yaml
on:
  workflow_run:
    workflows:
      - your-workflow  # Replace with your test workflow's name
    types: [ completed ]

jobs:
  comment-failure:
    runs-on: ubuntu-latest
    steps:
      - uses: quipper/comment-failure-action@v0.1.1
        with:
          api-token: ${{ secrets.YOUR_GITHUB_TOKEN }} # Replace with your secret's name
```

### Inputs

| Name      | Required | Default               | Description                                      |
|-----------|----------|-----------------------|--------------------------------------------------|
| api-token | `true`   | `${{ github.token }}` | GitHub API token granted `repo` or `public_repo` |

Regarding `api-token`, we recommend you to use the default value because `github.token` is regenerated for each run, and its permission is limited to the repository that contains the workflow.
For more information, please see https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context and https://docs.github.com/en/actions/reference/authentication-in-a-workflow.

## Notice

This repository was initially cloned from https://github.com/actions/typescript-action.

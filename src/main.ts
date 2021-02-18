import * as core from '@actions/core'
import * as github from '@actions/github'
import {Runner} from './runner'

async function run(): Promise<void> {
  try {
    const api_token = core.getInput('api-token')

    const payload = github.context.payload
    if (!payload.repository) {
      throw new Error("payload doesn't include `repository` key")
    }

    const check_suite_id = payload.workflow_run.check_suite_id
    const head_branch = payload.workflow_run.head_branch
    const head_commit = payload.workflow_run.head_commit.id
    const workflow = payload.workflow.name
    const owner = payload.repository.owner.login
    const repo = payload.repository.name

    core.debug(`check_suite_id = ${check_suite_id}`)
    core.debug(`head_branch = ${head_branch}`)
    core.debug(`head_commit = ${head_commit}`)
    core.debug(`workflow = ${workflow}`)
    core.debug(`owner = ${owner}`)
    core.debug(`repo = ${repo}`)

    const runner = new Runner({
      api_token,
      check_suite_id,
      head_branch,
      head_commit,
      workflow,
      owner,
      repo
    })
    await runner.run()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

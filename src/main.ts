import * as core from '@actions/core'
import {Runner} from './runner'

async function run(): Promise<void> {
  try {
    const api_token = core.getInput('api-token')
    const runner = new Runner(api_token)
    await runner.run()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

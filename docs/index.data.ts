import { execFileSync } from 'node:child_process'
import { defineLoader } from 'vitepress'

const OWNER = 'inigohidalgo'
const TOPIC = 'gh-pages-landing'

export interface Repo {
  name: string
}

export interface Data {
  repos: Repo[]
}

declare const data: Data
export { data }

export default defineLoader({
  watch: [],
  async load(): Promise<Data> {
    const stdout = execFileSync(
      'gh',
      [
        'repo',
        'list',
        OWNER,
        '--topic',
        TOPIC,
        '--json',
        'name',
        '--limit',
        '100',
      ],
      { encoding: 'utf8' },
    )
    const repos = (JSON.parse(stdout) as Repo[]).sort((a, b) =>
      a.name.localeCompare(b.name),
    )
    return { repos }
  },
})

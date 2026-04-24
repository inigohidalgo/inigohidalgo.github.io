<script setup lang="ts">
import { data } from './index.data.ts'

function go(name: string, e: MouseEvent) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  e.preventDefault()
  window.location.assign(`/${name}/`)
}
</script>

# Iñigo Hidalgo

<ul>
  <li v-for="repo in data.repos" :key="repo.name">
    <a :href="`/${repo.name}/`" @click="(e) => go(repo.name, e)">{{ repo.name }}</a>
  </li>
</ul>

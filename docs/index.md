<script setup lang="ts">
import { data } from './index.data.ts'
</script>

# Iñigo Hidalgo

<ul>
  <li v-for="repo in data.repos" :key="repo.name">
    <a :href="`/${repo.name}/`" target="_self">{{ repo.name }}</a>
  </li>
</ul>

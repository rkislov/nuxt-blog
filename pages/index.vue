<template>
  <el-col type="flex" justify="center">
    <el-col :xs="24" :sm="18" :lg="10"></el-col>
  <app-post
    v-for="post in 3" 
    :key="post" 
  />
  </el-col>
</template>

<script>
import AppPost from '@/components/main/Post'

export default {
  head: {
    title: 'Главная'
  },
  components: {
   AppPost
  }
}
</script>

<style>
</style>

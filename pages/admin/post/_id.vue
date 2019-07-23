<template>
   <div>
       <el-breadcrumb separator="/">
           <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
           <el-breadcrumb-item>{{$route.params.id}}</a></el-breadcrumb-item>
       </el-breadcrumb>
   </div>
</template>

<script>
    export default {
        name: "_id",
        layout: 'admin',
        middlewear: ['admin-auth'],
    }
</script>

<style scoped>

</style>
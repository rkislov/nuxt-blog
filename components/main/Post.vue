<template>
   <el-card
    shadow="hower"
    :body-style="{padding: 0}"
    class="post"
   >
   <header slot="header" class="post-header">
       <h3>Post Title</h3>
       <small>
           <i class="el-icon-time"></i>
           {{new Date().toLocaleString()}}

       </small>
   </header>
   <div class="post-body">
       <img src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" 
        class="post-img" 
        alt="post image">
   </div>
    <footer class="post-footer">
        <el-button round @click="openPost">
            Открыть пост
        </el-button>
        <span>
            <i class="el-icon-message">
                12
            </i>
        </span>
    </footer>
   </el-card>
</template>
<script>
export default {
    methods: {
        openPost() {
            const id = 'test-id'
            this.$router.push(`/post/${id}`)
        }
    }
}
</script>
<style lang="scss">
.post {
    margin-bottom: 1.5rem;
}
.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.post-body {
    // margin-bottom: 1rem;
}
.post-img {
    width: 100%;
    height: auto;
}
.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
</style>


<template>
    <el-form 
    :model="controls" 
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"
    >
    <h1>Добавить коментарий</h1>
  <el-form-item label="Ваше имя" prop="name">
    <el-input v-model.trim="controls.name" />
  </el-form-item>
   <el-form-item label="Текст коментария" prop="text">
    <el-input 
    type="textarea"
    v-model.trim="controls.text"
    resize="none"
    :rows="2"
    />
  </el-form-item>
  
  <el-form-item>
    <el-button 
    type="primary" 
    round
    native-type="submit"
    :loading="loading"
    >
    Добавить коментарий
    </el-button>
  </el-form-item>
</el-form>
</template>
<script>
import { setTimeout } from 'timers';
export default {
        data() {
            return {
                loading: false,
                controls: {
                    name: '',
                    text: ''
                },
                 rules: {
        name: [
            { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
          ],
        text: [
            { required: true, message: 'Введите ваш коментарий', trigger: 'blur' }
          ]
        }
    }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            
            const formData = {
              name: this.controls.name,
              text: this.controls.text,
              postId: ''
            }
            try {
              setTimeout(()=>{
                this.$emit('created')
                this.$message.success('Комментарий добавлен')
              },2000)

            } catch (e) {
              this.loading = false
            }
          
          }
        });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>



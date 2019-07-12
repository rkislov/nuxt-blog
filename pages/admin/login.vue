<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
        Login
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
    </el-card>
</template>
<script>
export default {
    layout: 'empty',
    data() {
        return {
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

        }
    }

</script>
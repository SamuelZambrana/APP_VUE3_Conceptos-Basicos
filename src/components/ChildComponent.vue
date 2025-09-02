<script setup>
import { ref } from 'vue'

const emit = defineEmits([
    "login",
    "update:userName"
])

defineProps({
    msg: String,
    person: {
        name: String,
        age: Number
    }
})


const userName = ref("Juan")


const login = () => {
    // Emitir un evento al padre
    emit("login", userName.value)
};

const handleUserName = (e) => {
  emit("update:userName", e.target.value)
}

</script>

<template>

    <div class="msg-container">
        <p class="msg-text">msg: {{ msg }}</p>
    </div>

    <div class="person-container">
        <p class="person-title">Objeto persona:</p>
        <p class="person-name">Nombre: {{ person.name }}</p>
        <p class="person-age">Edad: {{ person.age }}</p>
    </div>  

    <div class="child">
        <h2>Este es un componente Hijo</h2>
        <p>Nombre: {{ userName }}</p>

        <input type="text" v-model="userName" placeholder="Nuevo Nombre" class="styled-input"/>
        <button @click="login">Login</button>
    </div>

    <div>
         <slot name="bottom"> </slot>
    </div>

</template>

<style>

.msg-container {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.msg-text {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  color: #333;
  margin: 0;
}

.person-container {
  background-color: #f1f8e9;
  border-left: 4px solid #8bc34a;
  padding: 1rem;
  border-radius: 8px;
}

.person-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4e6b2c;
}

.person-name,
.person-age {
  margin: 0.3rem 0;
  font-family: 'Segoe UI', sans-serif;
  color: #444;
}

.styled-input {
  padding: 10px 15px;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.styled-input:focus {
  border-color: #2E7D32;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
  outline: none;
}


</style>
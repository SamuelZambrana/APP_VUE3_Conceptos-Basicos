<script setup>

import { useUserStore } from '../stores/user';

const userStore = useUserStore();

</script>

<template>
    <header class="header">


        <div class="login-bar">
            <template v-if="userStore.users.length">
                <span>Welcome, {{ userStore.users[0].name }}</span>
                <button @click="userStore.logout()">Logout</button>
            </template>
            <template v-else>
                <button @click="userStore.login()">Login</button>
            </template>
        </div>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="/movies">Movies</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'createMovie' }">Create Movie</router-link>
                </li>
                <li>
                    <router-link class="link" to="/conceptos-basicos">Conceptos Básicos</router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<style>
.header {
  width: 100%;
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-bar {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.link:hover {
  color: #00bcd4;
}

/* 📱 Responsive para pantallas pequeñas */
@media (max-width: 600px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }

  .login-bar {
    flex-direction: column;
    align-items: center;
  }
}

</style>
<script setup>

import { computed, reactive, ref, watch, watchEffect } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue';
import ChildComponent from '../components/ChildComponent.vue';

//Variable no reactiva(Javascript)
let number= 0;
const myId = "patata";
let myCondition = true;
const condition = true;
const condition2 = true;
const text = "Hola desde el padre";


//Variable reactiva(Vue)
let numberReac= ref(0)
const myValue= ref("Escribe algo..")
const myConditionReac = ref(true)
const displayName = ref("")
const userName = ref("samuel")
const nameLength = computed(() => userName.value.length)

//Datos mokeados Objetos o Arrays
const movies = ["pelicula1", "pelicula2", "pelicula3", "pelicula4"]
const movie = reactive({
  title: "El señor de los anillos",
  year: 2001,
  country: "USA"
})
const animals = [
  {
    id: 1,
    name: "León",
    img: "https://img.freepik.com/foto-gratis/leon-descansando-sabana_181624-28376.jpg"
  },
  {
    id: 2,
    name: "Elefante",
    img: "https://img.freepik.com/foto-gratis/elefante-africano-sabana_181624-28375.jpg"
  },
  {
    id: 3,
    name: "Jirafa",
    img: "https://img.freepik.com/foto-gratis/jirafa-sabana-africana_181624-28374.jpg"
  },
  {
    id: 4,
    name: "Tigre",
    img: "https://img.freepik.com/foto-gratis/tigre-bengala-mirando-camara_181624-28373.jpg"
  },
  {
    id: 5,
    name: "Zebra",
    img: "https://img.freepik.com/foto-gratis/zebra-sabana-africana_181624-28372.jpg"
  },
  {
    id: 6,
    name: "Oso polar",
    img: "https://img.freepik.com/foto-gratis/oso-polar-caminando-nieve_181624-28371.jpg"
  }
];

const person = {
  name: "Juan",
  age: 30
}

//Funciones para ser llamadas desde template
const addOne = () => {
  numberReac.value++;
}

const removeOne = () => {
  numberReac.value--;
}

const resetContador = () => {
  numberReac.value = 0;
}

const handleClass = () => {
  myConditionReac.value = !myConditionReac.value;
}

const handleLogin = (e) => {
  displayName.value = e;
}

const setName = () => {
  userName.value = "Nuevo Nombre";
}

const handleSubmit = () => {
  console.log("Formulario enviado!");
  console.log(movie);
}

watch(userName, (newValue, oldValue) => {
  console.log("El valor ha cambiado de " + oldValue + " a " + newValue);
}, {
  immediate: true,
  deep: true
})

watchEffect(() => {
  console.log("El valor de userName es: " + userName.value);
})

</script>

<template>

  <HeaderComponent />

<!-- Contador -->
<h1 class="title"><i class="fas fa-calculator"></i> Contador</h1>
<p><i class="fas fa-mouse-pointer"></i> Haga click en el número de abajo</p>
<p>{{ numberReac }}</p>
<button @click="addOne"><i class="fas fa-plus"></i> Incrementar</button>
<button @click="removeOne"><i class="fas fa-minus"></i> Decrementar</button>
<button @click="resetContador"><i class="fas fa-redo"></i> Reset</button>
<hr />

<!-- Atributos Dinámicos -->
<h1><i class="fas fa-sliders-h"></i> Atributos Dinámicos!</h1>
<p><i class="fas fa-magic"></i> Cambiamos el valor del atributo dinámicamente gracias a la directiva v-model</p>
<h2>{{ myValue }}</h2>
<input type="text" v-model="myValue" />
<hr />

<!-- Clases Dinámicas -->
<h1><i class="fas fa-paint-brush"></i> Clases Dinámicas</h1>
<h2 :class="{ highlight: myConditionReac, red: false }">
  <i class="fas fa-users"></i> Hola a todos!
</h2>
<button @click="handleClass"><i class="fas fa-sync-alt"></i> Cambia el color</button>
<hr />

<!-- Directiva condicional -->
<h1><i class="fas fa-code-branch"></i> Directiva v-if</h1>
<h2 v-if="!condition"><i class="fas fa-check-circle"></i> La primera condición se cumple</h2>
<h2 v-else-if="condition" :class="conditionColor"><i class="fas fa-exclamation-circle"></i> Se cumple la condición 2</h2>
<h2 v-else="condition2"><i class="fas fa-times-circle"></i> No se cumple la condición</h2>
<hr />

<!-- Directiva iteración array -->
<h1><i class="fas fa-list-ul"></i> Renderizado de listas | v-for</h1>
<div>
  <p v-for="(movie, index) in movies" :key="movie" class="movie">
    <i class="fas fa-film"></i> {{ index }} - {{ movie }}
  </p>
</div>
<ul class="animal-list">
  <li v-for="animal in animals" :key="animal.id" class="animal-card">
    <span><i class="fas fa-paw"></i> {{ animal.name }}</span>
    <img :src="animal.img" :alt="animal" />
  </li>
</ul>
<hr />

<!-- Comunicación entre componentes Padre ↔ Hijo -->
<h1><i class="fas fa-comments"></i> Comunicación Padre(Props) ↔ Hijo(Emit-Eventos)</h1>
<ChildComponent
  :msg="text"
  :person="person"
  @login="handleLogin"
  @update:userName="displayName = $event"
/>

<p v-if="displayName"><i class="fas fa-user-check"></i> Usuario logueado: {{ displayName }}</p>
<hr />

<!-- Slots Comunicación entre componentes Padre ↔ Hijo -->
<h1><i class="fas fa-comments"></i> Slots- Comunicacion Padre e Hijo</h1>
<h2>Este es el componente padre</h2>
<!--
<ChildComponent>
  <template v-slot:bottom>
    <p>Contenido del slot en el componente padre</p>
  </template>
</ChildComponent>
-->
<hr />

<!-- Computed | Propiedades Computadas -->
<h1><i class="fas fa-calculator"></i> Computed | Propiedades Computadas</h1>
<h2>Hola {{ userName }}</h2>
<input type="text" v-model="userName" />
<h3>La longitud de tu nombre es: {{ nameLength }}</h3>
<hr />

<!-- Watch | Vigilancia de cambios -->
<h1><i class="fas fa-eye"></i> Watch | Vigilancia de cambios</h1>
<h2>Hola {{ userName }}</h2>

<button @click="setName">Cambiar Nombre</button>
<hr />

<!-- WatchEffect | Vigilancia de cambios -->
<h1><i class="fas fa-eye"></i> WatchEffect | Vigilancia de cambios</h1>
<h2>Hola {{ userName }}</h2>

<button @click="setName">Cambiar de usuario</button>
<hr />

<!-- Form -->
<h1><i class="fas fa-eye"></i> Formularios</h1>
<form @submit.prevent="handleSubmit" class="form">
  <label for="userName"> Nombre
    Nombre:
    <input type="text" v-model="userName" placeholder="Nombre" />
  </label>
  <label for="email"> Correo Electrónico:
    <input type="email" v-model="myValue" placeholder="Email" />
  </label>
  <label for="password"> Contraseña:
    <input type="password" v-model="displayName" placeholder="Password" />
  </label>
  <label>
    Acepto términos y condiciones
    <input type="checkbox" v-model="myConditionReac" />
  </label>
  <label for="country">
    País:
    <select v-model="movie.country">
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="Spain">Spain</option>
      <option value="France">France</option>
    </select>
  </label>
  <button type="submit">Enviar</button>
</form>


</template>

<style scoped>

  .highlight {
    background-color: black;
    color: yellow;
  }

  .red {
    background-color: black;
    color: red
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: aliceblue;
  }

  .conditionColor {
    background-color: green;
  }

  .animal-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0;
  margin: 2rem 0;
  list-style: none;
  justify-content: center;
}

.animal-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 220px;
  text-align: center;
  transition: transform 0.3s ease;
}

.animal-card:hover {
  transform: scale(1.05);
}

.animal-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-top: 0.5rem;
}

.animal-card span {
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>

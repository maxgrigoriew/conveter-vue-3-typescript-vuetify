<template>
   <v-layout :theme="theme">
         <v-navigation-drawer
             image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
             theme="dark"
         >
            <v-list nav>
               <v-list-item
                   prepend-icon="mdi-email"
                   title="Конвертер"
                   value="inbox"
                   link
                   to="/"
               ></v-list-item>
               <v-list-item
                   prepend-icon="mdi-account-supervisor-circle"
                   title="Курс валют"
                   value="about"
                   link
                   to="/about"
               ></v-list-item>
            </v-list>
            <v-btn
                :prepend-icon="theme === 'light'
                   ? 'mdi-weather-sunny'
                   : 'mdi-weather-night'"
                @click="onClick"
                aria-hidden="true"
                class="d-block"
            />
         </v-navigation-drawer>
         <v-main>
            <v-layout>
               <v-container mt="0">
                  <router-view/>
               </v-container>
            </v-layout>
         
         </v-main>
   </v-layout>

</template>


<script setup>
import {ref} from 'vue'

const theme = ref('light')

function onClick() {
   theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

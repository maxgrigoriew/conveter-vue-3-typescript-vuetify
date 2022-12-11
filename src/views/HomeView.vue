<template>
   <v-row>
      <v-col cols="12">
         <h2 class="d-inline-block text-h4 text-blue font-weight-medium">Курсы валют ЦБ РФ</h2>
         <span> на <span class="text-blue">сегодня</span></span>
      </v-col>
      <v-col>
         <p>Информация о курсах обмена валюты, установленных Центральным Банком Российской Федерации. Курсы иностранных
            валют к рублю по ЦБ на сегодня
         </p>
      </v-col>
   </v-row>
   <v-row class="d-flex align-center">
      <v-col>
         <p>Курсы валют на сегодня</p>
      </v-col>
      <v-col>
         <v-text-field
             label="Введите валюту"
             hide-details= true
         ></v-text-field>
      </v-col>
   </v-row>
  <is-table :desserts="desserts"/>
</template>
<script lang="ts">
import {ref} from "vue"
import IsTable from "@/components/isTable.vue";

export default {
   components: {IsTable},
   setup() {
      let num = ref<number>(1)
      const changeNum = () => {
         console.log("vite")
         num.value++
      }
      const desserts = ref([
             {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
             },
             {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
             },
          ])
      return {
         num,
         desserts,
         changeNum,
      }
   },
}
</script>

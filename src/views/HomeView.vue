<script setup>
import dataservice from "../services/dataservice";
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const seasons = ref([]);
const episodes = ref([]);
const seasonId = ref(1);
const limit = ref(5);
const page = ref(1);
const maxPage = ref(1);
const actpage = ref(1);


// onMounted(() => {
// for (let index = 0; index < telefonok.value.length; index++) {
//   if (!szinek.value.includes(telefonok.value[index].szin)) {
//     szinek.value.push(telefonok.value[index].szin)
//   }
// }
// console.log(szinek.value);
// }),




DataService.getAllSeasons()
  .then((resp) => {
    seasons.value = resp;
    console.log(seasons.value);
  })
  .catch((err) => {
    console.log(err);
  });

;



const valaszto = (actpage) => {
  console.log(maxPage.value);
  if (actpage < 0 || actpage > maxPage.value) {
    return
    
  }
  page.value = actpage
  dataservice.getEpisodeById(seasonId.value,page.value, limit.value)
  .then((resp) => {
      maxPage.value = Math.ceil(resp.headers["x-total-count"] / limit.value);
     episodes.value = resp.data;
     console.log(episodes.value);
    })
   .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <select v-model="seasonId" @change="valaszto(1)">
    <option value="">Kérem válasszon</option>
    <option :value="season._id" v-for="season in seasons">{{ season._id }}</option>
  </select>
  <ul>
    <li v-for="episode in episodes">{{ episode.title }}</li>
  </ul>
  
  <button @click="valaszto(page-1)">le</button>
  <p>{{ page }}</p>
  <button @click="valaszto(page+1)">Fel</button>
</template>

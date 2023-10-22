<script setup>
import {computed, ref} from 'vue'
import {badMessages} from "./bad_messages";
import {goodMessages} from "./good_messages";


const answer = ref()
const answerInput = ref(null);
const result = ref({})
const errorCount = ref(0)
const i = ref(0)

const numberOfExamples = ref(10)
const exampleRefreshKey = ref(0)

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const score = computed(() => {
  return Math.max(2, 5 * (1 - errorCount.value / numberOfExamples.value))
})

const scoreText = computed(() => getRandomItem(score.value >= 4 ? goodMessages : badMessages))


const examples = computed(() => {
  console.log("run" + exampleRefreshKey.value)

  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let r = []

  for (const i in l) {
    for (const j in l) {
      r.push([l[i], l[j]])
    }
  }

  r = r.map(value => ({
    value,
    sort: Math.random()
  }))
      .sort((a, b) => a.sort - b.sort)
      .map(({
              value
            }) => value)
      .slice(0, numberOfExamples.value)

  return r

})

const example = computed(() => examples.value[i.value])

function check() {
  if (answer.value == example.value[0] * example.value[1]) {
    result.value = {
      text: getRandomItem(goodMessages),
      color: "green"
    }
    answer.value = undefined
    i.value++
  } else {
    result.value = {
      text: getRandomItem(badMessages),
      color: "red"
    }
    errorCount.value++
  }

  if (answerInput.value) {
    answerInput.value.focus();
  }
  // setTimeout(() => result.value = {}, 1000)

}


function reset() {
  exampleRefreshKey.value++
  errorCount.value = 0
  i.value = 0
  result.value = {}
}


</script>

<template>
  <v-slide-y-transition appear mode="out-in">
    <v-container v-if="example">
      <v-row>
        <v-col>
          <div class="text-h4">Сколько будет {{ example[0] }} * {{ example[1] }} ?</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field type="number" v-model="answer" autofocus="true" pattern="\d*" ref="answerInput"/>
        </v-col>
        <v-col>
          <v-btn @click="check" color="green" size="x-large">Ответить</v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div>Осталось вопросов: {{ numberOfExamples - i }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slide-y-transition mode="out-in">
            <div :key="result.text" v-if="result.text" class="text-h5" :style="{ color: result.color }">{{ result.text }}</div>
          </v-slide-y-transition>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else :style="{ color: score >= 4 ? 'green' : 'red' }">
      <v-row>
        <v-col>
          <div class="text-h1">{{ score }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-h5">
            {{ scoreText }}
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="text-center">
            <v-rating
                :length="5"
                :model-value=score
                active-color="primary"

            />
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn @click="reset" color="green" size="x-large">Заново</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {rawGoodMessages} from "./good_messages";
import {rawBadMessages} from "@/views/bad_messages";


const answer = ref()
const answerInput = ref(null);
const result = ref({})
const errorCount = ref(0)
const i = ref(0)

const numberOfExamples = ref(10)
const exampleRefreshKey = ref(0)


function shuffle(arr) {
  return arr.map(value => ({
    value,
    sort: Math.random()
  }))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)
}


function getMessage(messages, counter) {
  counter.value++
  if (messages.value[counter.value] === undefined) {
    counter.value = 0
  }
  return messages.value[counter.value]
}


const goodMessages = computed(() => shuffle(rawGoodMessages))
const goodMessagesCounter = ref(0)

const badMessages = computed(() => shuffle(rawBadMessages))
const badMessagesCounter = ref(0)

const score = computed(() => {
  return Math.max(2, 5 * (1 - errorCount.value / numberOfExamples.value))
})

const scoreText = computed(() => score.value >= 4 ? getMessage(goodMessages, goodMessagesCounter) : getMessage(badMessages, badMessagesCounter))


const examples = computed(() => {
  console.log("run" + exampleRefreshKey.value)

  const l = [2, 3, 4, 5, 6, 7, 8, 9]
  let r = []

  for (const i in l) {
    for (const j in l) {
      r.push([l[i], l[j]])
    }
  }

  r = shuffle(r).slice(0, numberOfExamples.value)

  return r

})

const example = computed(() => examples.value[i.value])

function check() {
  if (parseInt(answer.value) === example.value[0] * example.value[1]) {
    result.value = {
      text: getMessage(goodMessages, goodMessagesCounter),
      color: "green"
    }
    i.value++
  } else {
    result.value = {
      text: answer.value + "? " + getMessage(badMessages, badMessagesCounter),
      color: "red"
    }
    errorCount.value++
  }

  answer.value = undefined

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

onMounted(() => {
  if (answerInput.value) {
    answerInput.value.focus();
  }
})


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
          <v-text-field type="number" v-model="answer" pattern="\d*" ref="answerInput"/>
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

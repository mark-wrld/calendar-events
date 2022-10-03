<template>
  <div id="app">
    <label for="">Type events: </label>
    <select name="events" id="" v-model="eventType">
      <option :value="null">Не выбрано</option>
      <option :key="k" v-for="(item, k) in eventTypes" :value="item">{{item.value}}</option>
    </select>
    <hr class="mb-4 mt-4">
    <quarter-calendar :start="quarters.first.start" :dateFormat="dateFormat"
                      :events="filteredEvents"></quarter-calendar>
    <hr class="mb-4 mt-4">
    <quarter-calendar :start="quarters.second.start" :dateFormat="dateFormat"
                      :events="filteredEvents"></quarter-calendar>
  </div>
</template>

<script>
import QuarterCalendar from './QuarterCalendar'

const eventTypes =  {
  expertMeeting: 1,
  answerQuestion: 2,
  conference: 3,
  webinar: 4,
}

export default {
  name: 'App',
  components: {
    QuarterCalendar
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      quarters: {
        first: {
          start: new Date(year, month),
        },
        second: {
          start: new Date(year, month+2),
        }
      },
      dateFormat: 'DD.MM.YYYY:H:mm',
      eventTypes: [
        {
          id: eventTypes.expertMeeting,
          value: 'встреча с экспертом'
        },
        {
          id: eventTypes.answerQuestion,
          value: 'вопрос-ответ'
        },
        {
          id: eventTypes.conference,
          value: 'конференция'
        },
        {
          id: eventTypes.webinar,
          value: 'вебинар'
        },
      ],
      eventType: null,
      events: [
        {
          id: 1,
          type: eventTypes.expertMeeting,
          dates: {
            start: new Date(year, month, 1, 1), end: new Date(year, month, 1, 2),
          },
          title: 'Meet with Steave',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 111,
          type: eventTypes.expertMeeting,
          dates: {
            start: new Date(year, month, 1, 3), end: new Date(year, month, 1, 4),
          },
          title: 'Meet with Steave',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 1111,
          type: eventTypes.expertMeeting,
          dates: {
            start: new Date(year, month, 1, 6), end: new Date(year, month, 1, 7),
          },
          title: 'Meet with Steave',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 2,
          type: eventTypes.answerQuestion,
          dates: {
            start: new Date(year, month, 12, 4), end: new Date(year, month, 12, 8),
          },
          title: 'Meet with John',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 3,
          type: eventTypes.conference,
          dates: {
            start: new Date(year, month+1, 21, 12), end: new Date(year, month+1, 21, 16),
          },
          title: 'Office conference',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 4,
          type: eventTypes.conference,
          dates: {
            start: new Date(year, month+2, 22, 12), end: new Date(year, month+2, 22, 16),
          },
          title: 'Office conference',
          description: "so so....",
          location: "Warsaw, Poland"
        },

        {
          id: 11,
          type: eventTypes.expertMeeting,
          dates: {
            start: new Date(year, month+3, 2, 1), end: new Date(year, month+3, 2, 2),
          },
          title: 'Meet with Steave',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 12,
          type: eventTypes.answerQuestion,
          dates: {
            start: new Date(year, month+3, 12, 4), end: new Date(year, month+3, 12, 8),
          },
          title: 'Meet with John',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 13,
          type: eventTypes.conference,
          dates: {
            start: new Date(year, month+4, 24, 12), end: new Date(year, month+4, 24, 16),
          },
          title: 'Office conference',
          description: "so so....",
          location: "Warsaw, Poland"
        },
        {
          id: 14,
          type: eventTypes.conference,
          dates: {
            start: new Date(year, month+5, 19, 12), end: new Date(year, month+5, 19, 16),
          },
          title: 'Office conference',
          description: "so so....",
          location: "Warsaw, Poland"
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    filteredEvents() {
      return this.eventType ? this.events.filter(e => e.type === this.eventType.id) : this.events
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px;
  display: block;
}
select {
  border: #ddd solid 1px;
}
</style>

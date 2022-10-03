<template>
  <div class="quarter">
    <div>{{ moment(start).format("MMM")}} - {{ moment(start).add(2, 'M').format("MMM")}}</div>
    <v-calendar class="customize"
                ref="calendar"
                :attributes="attributes"
                :rows="3"
                :from-date="start"
                :columns="1"
                >
      <template #day-popover="{  dayTitle, attributes }">
        <div>
          <div class="text-xs text-gray-300 font-semibold text-center">
            {{ dayTitle }}
          </div>
          <popover-row
              v-for="attr in attributes"
              :key="attr.key"
              :attribute="attr">
            <div v-if="attr.customData.title">Event: {{ attr.customData.title }}</div>
            <div v-if="attr.customData.description">Short desc: {{ attr.customData.description }}</div>
            <template v-if="attr.customData.dates && attr.customData.dates.start">
              <div >From: {{ moment(attr.customData.dates.start).format(dateFormat)
              }}</div>
              <div>To: {{ moment(attr.customData.dates.start).add(2, 'M').format(dateFormat)}}</div>
            </template>
            <div v-if="attr.customData.location">Location: {{ attr.customData.location }}</div>
          </popover-row>
        </div>
      </template>
      <template #header-title></template>
      <template #week-day></template>
    </v-calendar>
  </div>
</template>

<script>
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'

export default {
  name: 'App',
  components: {
    PopoverRow
  },
  props: ['start', 'events', 'dateFormat'],
  mounted() {
  },
  methods: {
  },
  computed: {
    attributes() {
      return [
        ...this.events.map(event => ({
          dates: event.dates,
          highlight: true,
          customData: event,
          popover: {
            visibility: 'click',
            hideIndicator: true,
          }
        })),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.quarter {
  display: block;
}
::v-deep .customize.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 30px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: max-content;
  & .vc-popover-content {
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
  }
  & .vc-day-popover-row-content {
    max-width: 250px;
    flex-direction: column;
    padding: 8px;
    border: 1px solid #3082ce;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  & .vc-header {
    background-color: #f1f5f8;
    display: none;
  }
  & .vc-weeks {
    padding: 0;
    grid-template-columns: repeat(31,1fr);
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    display: none;
  }
  & .vc-day {
    padding: 0;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.is-not-in-month {
      display: none;
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
.flex-col {
  border: #b8c2cc solid 1px;
  &.active {
    border: red solid 2px;
  }
}
.vc-weeks {
  border: #b8c2cc solid 1px;
}

</style>

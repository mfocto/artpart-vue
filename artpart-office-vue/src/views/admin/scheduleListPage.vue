<template>
  <div>
      <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
      </div> <br><br>
      <div align="left" class="jb-header" ><h2>직원 목록&nbsp;<div class="button1" style="float: right;" >
        <button type="button" class="btn btn-dark" v-on:click="fnWrite">등록</button>
      </div></h2></div>
    <div id="calendar"></div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';


export default {
  mounted() {
    this.getSchedule().then((events) => {
      const calendarEl = document.getElementById("calendar");

      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek,listMonth"
        },
        initialView: "dayGridMonth",
        events,
        eventClick: this.handleEventClick,
      });

      calendar.render();
    });
  },
  methods: {
    getSchedule() {
      return this.$axios
          .get("/schedule/list")
          .then((response) => {
            return response.data.data.map((event) => ({
              id: event.event_id,
              title: event.title,
              start: event.start,
              end: event.end,
              backgroundColor: event.background_color,
              description: event.description,
            }));
          })
          .catch((error) => {
            console.error("Failed to fetch events from API:", error);
            return []; // Return an empty array or implement error handling
          });

    },
    handleEventClick(info) {
      const event_id = info.event.id;

      this.$router.push({
        path: './detail',
        query: {
          event_id: event_id
        }
      });
    },
    fnWrite(){
      this.$router.push({
        path: './write'
      })
    }

  },
};
</script>

<style scoped>
#calendar {
  max-width: 1100px;
  margin: 0 auto;
}
</style>

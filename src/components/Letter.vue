<template>
  <div class="letter centered">
    <div class="letter-title">
      <p>Buisness Opportunity</p>
    </div>
    <hr class="divider" />
    <div class="letter-text scrollbar-hidden">
      <p v-for="paragraph in getParagraphs" :key="paragraph">
        &emsp; {{ paragraph }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Letter",
  computed: {
    getTitle() {
      return this.$store.getters.letterTitle;
    },
    getParagraphs() {
      return this.$store.getters.letterParagraphs;
    },
  },
};
</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
.letter-text {
  max-height: 720px;
  padding-left: 40px;
  padding-right: 40px;
  top: 15%;
  word-break: break-all;
  overflow-y: auto;
  overflow-x: hidden;
}

.letter-title {
  top: 10%;
  transform: translateY(10%);
  text-align-last: center;
  font-weight: bold;
  font-size: xxx-large;
}

.letter {
  width: 750px;
  height: 900px;
  overflow: hidden;
  background-image: url(https://i.pinimg.com/originals/08/e4/b6/08e4b670ee05f38338bc34a00b874c09.jpg);
}

hr {
  padding-left: 40px !important;
  padding-right: 40px !important;
  background-color: black !important;
  color: black !important;
  border: none;
  height: 2px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}
</style>
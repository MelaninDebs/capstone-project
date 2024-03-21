<template>
  <section>
    <div class="box">
      <div style="color: red">
        <h1>page not found...</h1>
      </div>
      <button>
        <router-link to="/">&lt;&lt;&lt; Go Home</router-link>
      </button>
    </div>
    <div class="box">
      <img src="../assets/techny-404-error-in-laptop.png" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>section {
  min-height: 40rem;
  padding: 15rem 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  gap: 5rem;
}

.box div {
  margin-bottom: 4rem;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
}
button {
  font-size: 1.6rem;
  width: 20rem;
  height: 7rem;
  white-space: nowrap;
}</style>

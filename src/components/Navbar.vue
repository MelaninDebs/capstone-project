<template>
  <header>
    <div class="logo">
      <img src="../assets/Vector.png" alt="vector" />
      <div></div>
      <h3>SCISSORS</h3>
    </div>

    <nav>
      <ul class="navlist">
        <li>My URLs</li>
        <li>
          Features
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </li>
        <li>Pricing</li>
        <li>Analytics</li>
        <li>FAQs</li>
      </ul>
    </nav>

    <div class="navbuttons">
      <div class="loginbtn"><router-link to="/login">Log in</router-link></div>
      <button class="trybtn">
        <router-link to="/signup">Try for free</router-link>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>

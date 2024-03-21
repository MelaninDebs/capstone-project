<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;

    localStorage.setItem("isLoggedIn", "true");

    console.log("=====>", user);

    // ...
  } else {
    // User is signed out
    // ...
    console.log("User is signed out");
  }
});

</script>



<style scoped>

</style>
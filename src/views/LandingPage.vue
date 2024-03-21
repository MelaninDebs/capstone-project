<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <SecondSection></SecondSection>
    <CardSection></CardSection>
    <FaqSection></FaqSection>
    <BottomSection></BottomSection>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import SecondSection from "../components/SecondSection.vue";
import CardSection from "../components/CardSection.vue";
import FaqSection from "../components/FaqSection.vue";
import BottomSection from "../components/BottomSection.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped></style>

<template>
  <!-- mobile dashboard navbar -->
  <nav class="dashboard__nav mobile" v-if="toggle">
    <div class="logo">
      <img src="../assets/Vector.png" alt="vector" />
      <div></div>
      <h3>SCISSORS</h3>
    </div>

    <ul class="dashboard__navlists">
      <h5>Overview</h5>
      <li>
        <router-link class="link" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
            />
          </svg>
          Shorten Url
        </router-link>
      </li>

      <li>
        <router-link class="link" to="/dashboard/customurlpage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            
            <path
              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"
            />
          </svg>
          Get Custom Url
        </router-link>
      </li>

      <li>
        <router-link class="link" to="/dashboard/qrcodepage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"
            />
          </svg>
          Get QR Code
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/linkspage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
            />
          </svg>
          <p>My Links & Analytics</p>
        </router-link>
      </li>
      <li>
        <div class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
          <p>Notifications</p>
        </div>
      </li>
      <li @click="handleLogout">
        <div class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          <p>Logout</p>
        </div>
      </li>
    </ul>
  </nav>
  <main class="innerdashboard__container">
    <header class="header">
      <div class="logo">
        <img src="../assets/Vector.png" alt="vector" />
        <div></div>
        <h3>SCISSORS</h3>
      </div>
      <nav class="right__nav">
        <div class="nav__icons">
          <div v-if="!toggle" @click="toggleMenu" class="menu-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
          <svg
            class="close-btn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            @click="toggleMenu"
            v-else="toggle"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
          <svg
            class="notification-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
        </div>
      </nav>

      <div class="img__box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../utils/firebase";

const router = useRouter();

const isLoading = ref(true);

let profile = reactive({
  photoURL: "",
});

const handleLogout = async () => {
  try {
    await signOut(getAuth());
    localStorage.clear();
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};

let toggle = ref<boolean>(false);

function toggleMenu() {
  return (toggle.value = !toggle.value);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoading.value = false;
    profile.photoURL = user.photoURL ?? "";
  }
});
</script>

<style scoped>
.logo {
  font-size: 2rem;
  margin-right: auto;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 17rem;
  height: 100vh;
  background-color: #1974fe;
  color: #ccc;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
}

.logo {
  margin: 2rem 0 -2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo p {
  font-size: 1rem;
}

.mobile {
  display: none;
}

.dashboard__navlists .link {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  color: #ddd;
  font-weight: bold;
  &:hover {
    letter-spacing: 2px;
  }
}
nav ul li a.router-link-exact-active {
  background: rgb(193, 193, 233);
}
li {
  border-bottom: 2px solid aliceblue;
  margin-bottom: 1rem;
}

.dashboard__navlists p,
.dashboard__navlists h5 {
  color: #fff;
}

.dashboard__navlists .link svg {
  background-color: #fff;
  color: red;
  height: 2rem;
  border-radius: 50%;
  padding: 0.2rem;
  width: 2rem;
}

.dashboard__navlists li:last-child {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.header {
  position: fixed;
  top: -1rem;
  left: 8rem;
  right: -14rem;
  background: rgb(193, 193, 233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 7%;
  height: 6rem;
}

.innerdashboard__container .header .logo {
  display: none;
  flex-direction: row;
}

.innerdashboard__container .header p {
  min-width: 2rem;
}

.right__nav {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.notificationbox {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  color: #fff;
  top: 11%;
  left: 22%;
  background: #1974fe;
  text-align: center;
  padding-top: 3rem;
  /* z-index: 111; */
}

.notificationbox p {
  font-size: 1.3rem;
}

.navigationlist {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  top: 11%;
  right: 5%;
  background: #1974fe;
  text-align: center;
  padding-top: 1rem;
  z-index: 1111;
}

.navigationlist li .link {
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  font-weight: bold;
}

.header .nav__icons {
  display: flex;
  gap: 3rem;
  position: absolute;
  top: 40%;
  right: 20%;
  z-index: 111;
  color: #fff;
  cursor: pointer;
  gap: 1rem;
  /* align-items: center; */
}

.nav__icons .notification-icon {
  display: flex;
  color: red;
  height: 2rem;
  width: 2rem;
}
.icons .menu-icon,
.icons .close-icon {
  display: none;
}

.mobile-header {
  display: none;
}

.nav__icons .menu-bar svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
}

svg {
  height: 2rem;
  width: 2rem;
  display: none;
  align-items: center;
  justify-content: center;
}

.header .img__box svg {
  display: block;
}

.header .img__box {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: #1974fe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img__box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 767px) {
  .logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .logo h3 {
    white-space: nowrap;
  }

  .innerdashboard__container .header .logo {
    margin-bottom: 1rem;
    max-width: 18rem;
    font-weight: bold;
    display: flex;
  }

  .innerdashboard__container .header h3 {
    line-height: 1;
    letter-spacing: 0.2;
    font-size: 2rem;
  }

  .nav__icons .menu-bar svg {
    display: flex;
    height: 2rem;
    width: 2rem;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }

  svg {
    display: flex;
  }

  .header {
    left: -1rem;
    right: -2rem;
  }

  .header .img__box {
    height: 4.5rem;
    width: 4.5rem;
    margin-left: 2rem;
  }

  .right__nav {
    gap: 7rem;
  }
}

@media (max-width: 480px) {
  .logo h3 {
    font-size: 1.8rem;
  }

  .logo p {
    font-size: 0.8rem;
  }

  .header {
    padding: 1.2rem 2%;
  }
  .dashboard__nav {
    width: 15rem;
  }

  .header .nav__icons {
    right: 22%;
    gap: 1rem;
  }
}

@media (max-width: 320px) {
  .logo {
    margin-left: -2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .dashboard__nav {
    width: 11.6rem;
  }

  .dashboard__navlists h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .dashboard__navlists .link {
    gap: 1rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }

  .header .img__box {
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>

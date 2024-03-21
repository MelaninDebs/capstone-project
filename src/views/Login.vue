<template>
  <section>
    <div class="signup__box">
      <div class="signup__form">
        <form action="">
          <p class="header">Login with:</p>
          <div class="navigatepagebtn-box">
            <button>
              <router-link to="/signup">REGISTER</router-link>
            </button>
            <button>
              <router-link to="/login">LOGIN</router-link>
            </button>
          </div>
          <button>
            <router-link to="/">&lt;&lt;&lt; Go Home</router-link>
          </button>
          <div class="break">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <div class="inner__form">
            <label for="email">
              <input
                type="email"
                v-model="v$.email.$model"
                placeholder="Email address or username"
              />
              <small v-if="v$.email.$errors.length > 0 && v$.email.$errors[0]" style="color: red">
                {{ v$.email.$errors[0].$message }} 
              </small>
            </label>
            <label for="password">
              <input
                type="password"
                v-model="v$.password.$model"
                placeholder="Password"
              />
              <small
                style="
                  color: #1974fe;
                  align-self: flex-end;
                  margin-bottom: -1rem;
                "
                >Forgot your password?</small
              >
              <small v-if="v$.password.$errors.length"  style="
                  color: red;">{{ 
                v$.password.$errors[0].$message
              }}</small>
            </label>

            <div class="btn-box">
              <button type="button" @click="handleLogin">Login account</button>
              <p>
                Don't have an account?
                <router-link to="/signup" class="route"> Sign Up </router-link>
              </p>

              <p>
                By Signing up, you agree to <br />
                scissor's
                <strong
                  >Terms of Service, Privacy Policy and Acceptance Use
                  Policy</strong
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer.vue";

const user = reactive({
  email: "",
  password: "",
});

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(userRules, user);

const router = useRouter();

const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response);
    if (response.user) {
      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");
    }
  } catch (error: any) {
    console.log(error);
    toast.error(error.message);
  }
};
</script>

<style scoped>
section {
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

section .signup__box {
  margin: 0 auto;
}

.signup__form {
  display: flex;
  flex-direction: column;
}

form .header {
  text-align: center;
  margin-bottom: 1rem;
  color: #aaa;
}

.navigatepagebtn-box {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
}

.navigatepagebtn-box button {
  border-radius: 0;
}

.inner__form {
  display: flex;
  flex-direction: column;
}

.inner__form .name {
  display: flex;
  flex-direction: column;
}

.break {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.break span {
  width: 40%;
  height: 2px;
  background: #aaa;
  margin-bottom: 2rem;
}

.break p {
  margin-bottom: 2rem;
}

.inner__form input {
  border: 2px solid #1974fe;
  border-radius: 1rem;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.btn-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.btn-box button {
  width: 100%;
}

.btn-box p {
  text-align: center;
  color: #aaa;
}

.btn-box .route {
  color: #1974fe;
}

@media (max-width: 640px) {
}
</style>

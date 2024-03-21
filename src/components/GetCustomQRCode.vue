<template>
  <section>
    <div class="inner__dashboard">
      <h1>Get A Custom QR Code</h1>
      <form action="">
        <label for="">
          Input Your Link: <br />
          <input
            v-model="inputUrl"
            type="url"
            placeholder="e.g. https://developer.mozilla.org/en-US/docs/Web"
          />
          <button @click="handleLink">Shorten Link</button>
        </label>

        <label for=""
          >Shortened Link: <br />
          <input type="url" v-model="outputUrl" />
          <button @click="copyToClipBoard">Copy Link</button>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";

import { ref, reactive } from "vue";

interface myUrls {
  shortUrl: string;
  longUrl: string;
}

const inputUrl = ref("");
const outputUrl = ref("");

const myUrls: myUrls[] = reactive([]);

const getUrl = async () => {
  const endpoint = "https://api-ssl.bitly.com/v4/qr-codes";
  const accessToken = "f099c414948f81bd68e28a4d9319ebf9a8cc17b7";

  try {
    const response = await axios.post(
      endpoint,
      {
        title: "Default QR Code",
        group_guid: "Ba1bc23dE4F",
        destination: { bitlink_id: "bit.ly/abc123" },
        archived: false,
        render_customizations: {
          background_color: "#ffffff",
          dot_pattern_color: "#000000",
          dot_pattern_type: "standard",
          corners: {
            corner_1: {
              inner_color: "#000000",
              outer_color: "#000000",
              shape: "standard",
            },
            corner_2: {
              inner_color: "#000000",
              outer_color: "#000000",
              shape: "standard",
            },
            corner_3: {
              inner_color: "#000000",
              outer_color: "#000000",
              shape: "standard",
            },
          },
          branding: { bitly_brand: true },
          spec_settings: { error_correction: 4 },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    outputUrl.value = response.data.link;

    // handleUpdateUrls();
  } catch (error) {
    console.error(error);
  }
};

const handleLink = async () => {
  await getUrl();

  //   createUrl({
  //     longUrl: inputUrl.value,
  //     shortUrl: outputUrl.value,
  //   });
};

const copyToClipBoard = () => {
  navigator.clipboard.writeText(outputUrl.value);
  inputUrl.value = "";
  outputUrl.value = "";
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner__dashboard {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(4, 4, 168, 0.2);
  box-shadow: 0px 7px 12px rgba(68, 68, 241, 0.3);
  height: 25rem;
  width: 60%;
  margin-left: 12rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
}

label {
  color: yellow;
}

label + label {
  color: green;
}

input {
  height: 3rem;
  width: 65%;
  background-color: transparent;
  margin-right: 1rem;
  text-indent: 0.5rem;
  box-shadow: 1px 4px 8px rgba(68, 68, 241, 0.5);
  border-bottom: 2px solid #1974fe;
}

label + label > input {
  color: green;
}

button {
  width: 30%;
}

@media (max-width: 768px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }
}
@media (max-width: 480px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }

  input {
    width: 60%;
  }

  button {
    width: 30%;
  }

  form {
    padding: 0 1rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.7rem;
  }
}
</style>

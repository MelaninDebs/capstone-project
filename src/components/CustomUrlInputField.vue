<template>
  <section>
    <div class="inner__dashboard">
      <h1>Customize Your URL</h1>
      <form action="">
        <label for="">
          Input Your Link: <br />
          <input
            class="link-input"
            v-model="inputUrl"
            type="text"
            placeholder="e.g. https://developer.mozilla.org/en-US/docs/Web"
          />
        </label>
        <label for="" class="custom-label">
          Input Custom Path: <br />
          <input v-model="customText" type="text" placeholder="e.g. mysite" />
          <button @click="handleCustomizeLink">Customize Link</button>
        </label>

        <label for=""
          >Customized Link: <br />
          <input type="text" v-model="outputUrl" />
          <button @click.prevent="copyToClipBoard">Copy Link</button>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { ref, reactive } from "vue";
import { toast } from "vue3-toastify";




interface myCustomUrls {
  shortUrl: string;
  longUrl: string;
}

const inputUrl = ref("");
const outputUrl = ref("");
const customText = ref("");

const myCustomUrls: myCustomUrls[] = reactive([]);

const createUrl = async (data: { longUrl: string; shortUrl: string }) => {
  try {
    await setDoc(doc(db, "myCustomUrls", "0UPNpOS112cR7j138Sug"), data);
    console.log(db);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateUrls = async () => {
  const urlRef = collection(db, "myCustomUrls");
  const urlQuery = query(urlRef, orderBy("createdAt", "asc"));

  // Get initial data
  const querySnapshot = await getDocs(urlRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
      console.log(doc.id, " => ", doc.data());
      myCustomUrls.push(doc.data() as myCustomUrls);
    });
  } else {
    console.log("No such document!");
  }

  console.log(myCustomUrls);

  onSnapshot(urlQuery, (snapshot) => {
    snapshot.docs.map((doc) => {
      myCustomUrls.push(doc.data() as myCustomUrls);
    });
    console.log(myCustomUrls);
  }),
    (error: any) => {
      console.log(error);
    };
};

const customizeUrl = async () => {
  const endpoint = "https://api-ssl.bitly.com/v4/bitlinks";
  const accessToken ="f099c414948f81bd68e28a4d9319ebf9a8cc17b7";

  try {
    const response = await axios.post(
      endpoint,
      {
        long_url: inputUrl.value,
        domain: "bit.ly",
        custom_bitlink: customText.value,
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

    handleUpdateUrls();
    toast.success("Url Shortened successfully");
  } catch (error:any) {
    console.error(error);
    toast.error(error.message);
  }
};

const handleCustomizeLink = async () => {
  await customizeUrl();

  createUrl({
    longUrl: inputUrl.value,
    shortUrl: outputUrl.value,
  });
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
  height: 25rem;
  width: 60%;
  margin-left: 12rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
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
  border-bottom: 2px solid #1974fe;
  box-shadow: 1px 4px 8px rgba(68, 68, 241, 0.5);
}

.link-input {
  width: 95%;
}

.custom-label {
  color: yellow;
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

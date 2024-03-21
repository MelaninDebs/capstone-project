<template>
  <section>
    <div class="inner__dashboard">
      <h1>SHORTENED LINKS AND ANALYTICS</h1>
      <div class="box">
        <ul v-for="(url, i) in myUrls" :key="i" class="links__box">
          <li><span>Long Url:</span> {{ url.longUrl }}</li>
          <li class="green">
            <span class="green">Short Url: </span> {{ url.shortUrl }}
          </li>
        </ul>
        <button>Check Analytics</button>
      </div>

      <ul v-for="(url, i) in myCustomUrls" :key="i" class="links__box">
        <li><span>Long Url:</span> {{ url.longUrl }}</li>
        <li class="green">
          <span class="green">Short Url: </span> {{ url.shortUrl }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import {
  getDocs,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebase";

interface myUrls {
  shortUrl: string;
  longUrl: string;
}

const myUrls: myUrls[] = reactive([]);
const myCustomUrls: myUrls[] = reactive([]);

const handleUpdateUrls = async () => {
  const urlRef = collection(db, "myUrls");
  const urlQuery = query(urlRef, orderBy("createdAt", "asc"));

  // Get initial data
  const querySnapshot = await getDocs(urlRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
      console.log(doc.id, " => ", doc.data());
      myUrls.push(doc.data() as myUrls);
    });
  } else {
    console.log("No such document!");
  }

  console.log(myUrls);
  console.log(myCustomUrls);

  onSnapshot(urlQuery, (snapshot) => {
    snapshot.docs.map((doc) => {
      myUrls.push(doc.data() as myUrls);
    });
    console.log(myUrls);
  }),
    (error: any) => {
      console.log(error);
    };
};

onMounted(async () => {
  return await handleUpdateUrls();
});
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
  background: rgba(4, 4, 168, 0.2);
  box-shadow: 0px 7px 12px rgba(68, 68, 241, 0.3);
  height: 29rem;
  width: 70%;
  margin-left: 12rem;
}
.inner__dashboard .box {
  display: flex;
  gap: 4rem;
}
h1 {
  font-size: 2rem;
  margin-bottom: 4rem;
  margin-top: 1rem;
  color: aliceblue;
  border-top: 4px solid #1974fe;
  border-bottom: 4px solid #1974fe;
}

li {
  margin-bottom: 1rem;
  font-weight: bold;
  padding: 0 1rem;
  border-bottom: 2px solid #1974fe;
  flex-direction: column;
}

.links__box li span {
  background: rgba(68, 68, 241, 0.3);
  margin-right: 2rem;
  padding: 0.2rem;
}

.green {
  color: green;
}

@media (max-width: 768px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }

  .inner__dashboard .box {
    gap: 2rem;
  }

  h1 {
    text-align: center;
  }

  .inner__dashboard .box button {
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .inner__dashboard {
    margin-left: 1rem;
    width: 85%;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>

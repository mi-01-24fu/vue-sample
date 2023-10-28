<template>
  <div>
    <h1>サインアップ</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">ユーザー名:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <button type="submit">サインアップ</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { signUp } from '../api';

export default {
  name: 'SignUp',
  setup() {
    const username = ref('');
    const email = ref('');

    function validateInput() {
      // 簡単なバリデーション
      if (!username.value || !email.value) {
        alert('全てのフィールドを入力してください。');
        return false;
      }
      return true;
    }

    async function submitForm() {
    if (validateInput()) {
      try {
        const response = await signUp(username.value, email.value);
        console.log("API response:", response);
      } catch (error) {
        console.error("SignUp error:", error);
      }
    }
  }

    return {
      username,
      email,
      submitForm
    };
  }
};
</script>
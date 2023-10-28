import axios from 'axios';

const baseURL = 'http://your_backend_endpoint_here'; // あなたのバックエンドのエンドポイントを設定してください。

const apiClient = axios.create({
  baseURL,
  timeout: 5000,  // リクエストのタイムアウトを5秒に設定します。
});

export async function signUp(username: string, email: string) {
  try {
    const response = await apiClient.post('/signup', { username, email }); // サインアップのエンドポイントと、パラメータを設定してください。
    return response.data;
  } catch (error) {
    throw error;
  }
}
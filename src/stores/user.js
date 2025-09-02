import { defineStore } from "pinia";
import { ref } from "vue";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const useUserStore = defineStore('user', {
  state: () => ({
    users: ref([]),
    loading: false,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
    async addUser(user) {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        const data = await response.json();
        this.users.push(data);
      } else {
        throw new Error("Error adding user");
      }
    },
    async getUserById(id = 1) {
      const user = this.users.find(user => user.id === id);
      if (user) {
        return user;
      } else {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const data = await response.json();
          this.users.push(data);
          return data;
        } else {
          throw new Error("User not found");
        }
      }
    },
    async logout() {
      this.users = [];
    },
    async login(id = 1) {
      const user = await this.getUserById(id);
      this.users.push(user);
    }
  },
  persist: true
});

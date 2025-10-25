class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint = "", options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const text = await response.text();
      return text ? JSON.parse(text) : null;
    } catch (err) {
      console.error("Request failed:", err);
      throw err;
    }
  }

  getAll() {
    return this.request("/");
  }

  getOne(id) {
    return this.request(`/${id}`);
  }

  create(data) {
    return this.request("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  update(id, data) {
    return this.request(`/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  patch(id, data) {
    return this.request(`/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  delete(id) {
    return this.request(`/${id}`, { method: "DELETE" });
  }
}

const postsApi = new ApiService("https://jsonplaceholder.typicode.com/posts");

(async () => {
  console.log(await postsApi.getAll());     // GET semua data
  console.log(await postsApi.getOne(1));    // GET post id=1
  console.log(await postsApi.create({ title: "foo", body: "bar", userId: 1 }));
  console.log(await postsApi.update(1, { title: "updated", body: "text", userId: 2 }));
  console.log(await postsApi.patch(1, { body: "patched text" }));
  console.log(await postsApi.delete(1));
})();

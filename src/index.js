export default {
  async fetch() {
    return new Response("Hello World - Everything is Fake", {
      headers: { "content-type": "text/plain; charset=UTF-8" },
    });
  },
};

let routes = {};
const notFoundPage = "notfound.html";

fetch("routes/routes.json")
  .then(res => res.json())
  .then(data => {
    routes = data;

    // fetch 完了後にイベント登録
    document.getElementById("searchButton").addEventListener("click", () => {
      const input = document.getElementById("searchInput").value.trim();

      if (routes[input]) {
        window.location.href = routes[input];
      } else {
        window.location.href = `notfound.html?word=${encodeURIComponent(input)}`;
      }
    });
  })
  .catch(err => console.error("routes.json 読み込みエラー:", err));

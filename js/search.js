
document.addEventListener("DOMContentLoaded", () => {
  let routes = {};
  const notFoundPage = "notfound.html";

  fetch("https://hidukimura.etranger-d.org/routes/routes.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("routes.json が読み込めませんでした");
      }
      return res.json();
    })
    .then(data => {
      routes = data;

      document.getElementById("searchButton").addEventListener("click", () => {
        const input = document.getElementById("searchInput").value.trim();

        if (routes[input]) {
          window.location.href = routes[input];
        } else {
          window.location.href = `notfound.html?word=${encodeURIComponent(input)}`;
        }
      });
    })
    .catch(err => {
      console.error("検索ルート読み込みエラー:", err);
    });
});

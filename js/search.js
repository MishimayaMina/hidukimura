let routes = {};
const notFoundPage = "notfound.html";

// JSON を読み込む
fetch("routes/routes.json")
  .then(res => res.json())
  .then(data => routes = data);

// 検索ボタンの動作
document.getElementById("searchButton").addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim();

  if (routes[input]) {
    window.location.href = routes[input];
  } else {
    window.location.href = `notfound.html?word=${encodeURIComponent(input)}`;
  }
});


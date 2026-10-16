// -----------------------------
// メモ一覧を読み込む
// -----------------------------
const memoList = JSON.parse(localStorage.getItem("memoList") || "[]");
const grid = document.getElementById("memo-grid");

// -----------------------------
// アイコン＋日付をグリッドに追加
// -----------------------------
memoList.forEach((memo, index) => {

    const item = document.createElement("div");
    item.className = "memo-item";

    item.innerHTML = `
        <div class="memo-content">
            <img src="../images/icon_120401_64.png" alt="mem">
            <div class="memo-date">${memo.date}</div>
        </div>
    `;

    item.onclick = () => {
        localStorage.setItem("memoDetailIndex", index);
        location.href = "view_detail.html";
    };

    grid.appendChild(item);
});

// -----------------------------
// トップページに戻る
// -----------------------------
document.getElementById("view-back").onclick = () => {
    location.href = "../index.html";
};

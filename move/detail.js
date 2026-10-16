// -----------------------------
// 保存されたメモ一覧を取得
// -----------------------------
const memoList = JSON.parse(localStorage.getItem("memoList") || "[]");

// -----------------------------
// 一覧ページで選択されたメモの index を取得
// -----------------------------
const index = Number(localStorage.getItem("memoDetailIndex"));

// -----------------------------
// 該当メモを取得
// -----------------------------
const memo = memoList[index];

// -----------------------------
// HTML要素を取得
// -----------------------------
const dateEl = document.getElementById("detail-date-text");
const contentEl = document.getElementById("detail-content");

// -----------------------------
// メモ内容を表示
// -----------------------------
if (memo) {
    dateEl.textContent = memo.date;
    contentEl.textContent = memo.text;
} else {
    dateEl.textContent = "データがありません";
    contentEl.textContent = "";
}

// -----------------------------
// 削除ボタン
// -----------------------------
document.getElementById("detail-delete").onclick = () => {

    // 該当メモを削除
    memoList.splice(index, 1);

    // 保存し直す
    localStorage.setItem("memoList", JSON.stringify(memoList));

    // 一覧ページへ戻る
    alert("削除しました");
    location.href = "view.html";
};

// -----------------------------
// トップページへ戻る
// -----------------------------
document.getElementById("detail-back").onclick = () => {
    location.href = "../index.html";
};

document.getElementById("detail-back-list").onclick = () => {
    location.href = "view.html";
};

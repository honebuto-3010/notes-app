// -----------------------------
// 日付の表示
// -----------------------------
const dateEl = document.getElementById("memo-date-text");
const today = new Date();
dateEl.textContent = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;


// -----------------------------
// リセットボタン
// -----------------------------
const memoInput = document.querySelector(".memo-input");
const resetBtn = document.getElementById("memo-reset");

resetBtn.addEventListener("click", () => {
    memoInput.value = "";
});


// -----------------------------
// トップページに戻る
// -----------------------------
const backBtn = document.getElementById("memo-back");

backBtn.addEventListener("click", () => {
    location.href = "../index.html";
});


// -----------------------------
// 保存ボタン
// -----------------------------
document.getElementById("memo-save").onclick = () => {

    const text = memoInput.value;               // メモ内容
    const date = dateEl.textContent;            // 日付

    // 入力チェック
    if (!text) {
        alert("メモ内容を入力してください");
        return;
    }

    // 保存データを作成
    const memoList = JSON.parse(localStorage.getItem("memoList") || "[]");

    memoList.push({
        text: text,
        date: date
    });

    // 保存
    localStorage.setItem("memoList", JSON.stringify(memoList));

    // 保存完了の通知
    alert("保存されました");

    // 一覧ページへ移動
    location.href = "view.html";
};

document.addEventListener("DOMContentLoaded", () => {

    const shelf = document.getElementById("books-shelf-grid");

    // 保存された本データを取得
    const bookList = JSON.parse(localStorage.getItem("bookList") || "[]");

    // 本がない場合
    if (bookList.length === 0) {
        shelf.innerHTML = `<p style="color:#006b3a; font-size:1rem;">まだ保存された本はありません。</p>`;
        return;
    }

    // カード生成
    bookList.forEach((book, index) => {

        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <div class="book-title">
            <img src="../images/icon_112381_64.png" class="book-icon">
            ${book.title}
            </div>
        `;

        // 詳細ページへ移動（後で作る）
        card.addEventListener("click", () => {
            localStorage.setItem("bookDetailIndex", index);
            location.href = "books_detail.html";
        });

        shelf.appendChild(card);
    });
});

// 戻るボタン
document.getElementById("shelf-back").onclick = () => {
    location.href = "../index.html"; // トップページへ
};

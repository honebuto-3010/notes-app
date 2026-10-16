document.addEventListener("DOMContentLoaded", () => {

    const index = localStorage.getItem("bookDetailIndex");
    const bookList = JSON.parse(localStorage.getItem("bookList") || "[]");
    const book = bookList[index];

    if (!book) {
        alert("データが見つかりません");
        location.href = "books_shelf.html";
        return;
    }

    document.getElementById("detail-title").textContent = book.title;
    document.getElementById("detail-author").textContent = book.author;
    document.getElementById("detail-publisher").textContent = book.publisher;
    document.getElementById("detail-price").textContent = book.price ? `${book.price}円` : "";
    document.getElementById("detail-genre").textContent = book.genre;
    document.getElementById("detail-type").textContent = book.type;
    document.getElementById("detail-memo").textContent = book.memo;
    document.getElementById("detail-date").textContent = book.date;
});

// 削除処理
document.getElementById("detail-delete").onclick = () => {

    if (!confirm("この本を削除しますか？")) return;

    const index = localStorage.getItem("bookDetailIndex");
    const bookList = JSON.parse(localStorage.getItem("bookList") || "[]");

    // 削除
    bookList.splice(index, 1);
    localStorage.setItem("bookList", JSON.stringify(bookList));

    alert("削除しました");
    location.href = "books_shelf.html";
};

// 戻るボタン
document.getElementById("detail-back").onclick = () => {
    location.href = "books_shelf.html";
};

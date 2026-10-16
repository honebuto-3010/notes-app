document.getElementById("book-save").onclick = () => {

    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const publisher = document.getElementById("book-publisher").value;
    const price = document.getElementById("book-price").value;
    const genre = document.getElementById("book-genre").value;
    const type = document.getElementById("book-type").value;
    const memo = document.getElementById("book-memo").value;

    // 入力チェック
    if (!title || !author) {
        alert("タイトルと著者は必須です");
        return;
    }

    // 保存データを作成
    const bookList = JSON.parse(localStorage.getItem("bookList") || "[]");

    bookList.push({
        title: title,
        author: author,
        publisher: publisher,
        price: price,
        genre: genre,
        type: type,
        memo: memo,
        date: new Date().toISOString().slice(0, 10) // 保存日
    });

    // 保存
    localStorage.setItem("bookList", JSON.stringify(bookList));

    // 保存完了
    alert("保存しました");

    // 自動リセット
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-publisher").value = "";
    document.getElementById("book-price").value = "";
    document.getElementById("book-genre").value = "";
    document.getElementById("book-type").value = "";
    document.getElementById("book-memo").value = "";

    // 必要なら一覧ページへ移動（後で決める）
    // location.href = "books_shelf.html";
};

document.getElementById("book-back").onclick = () => {
    location.href = "../index.html";
};

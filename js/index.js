const clickSubmitBtn = () => {
    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;

    let selectedMovie = '';
    let count = 0;
    let movieSelectBtns = document.getElementsByClassName("movie_select_btn");
    for (let i = 0; i < movieSelectBtns.length; i++) {
        if (movieSelectBtns[i].checked) {
            selectedMovie += movieSelectBtns[i].nextSibling.nodeValue.trim() + " ";
            count++;
        }
    }

    let guestbook = document.createElement('div');
    guestbook.innerHTML = '<p><strong>이름:</strong> ' + name + '</p>' +
        '<p><strong>선택한 영화:</strong> ' + selectedMovie + '</p>';
    document.body.appendChild(guestbook);

    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

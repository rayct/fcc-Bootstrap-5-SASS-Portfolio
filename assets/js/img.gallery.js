// IMAGE MODAL EVEN LISTENER
document.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target.classsList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        console.log(src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();

        
    }
})
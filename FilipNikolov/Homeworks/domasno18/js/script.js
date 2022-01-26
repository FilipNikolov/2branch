var gallery_grid = document.querySelector(".gallery-grid");
var gallery_detail_popup = document.querySelector(".gallery-detail-popup");
var close_popup = document.querySelector(".close-popup");
var popup_image = document.querySelector(".popup-image");

const FetchPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => {
            let dataArr = data.slice(0, 100);
            dataArr.forEach(photo => {
                let img = document.createElement("img");
                img.src = photo.thumbnailUrl;
                img.classList.add("image")
                gallery_grid.appendChild(img)
                console.log("FetchPhotos -> photo", photo);

                img.addEventListener("click", function() {
                    ShowPopup(photo);
                });
            });

        }).catch(err => {
            console.log("FetchPhotos -> err", err)
        });
}
const ShowPopup = (img) => {
    gallery_detail_popup.classList.remove("hidden");
    gallery_detail_popup.classList.add("show");
    popup_image.src = img.url;
}

const ClosePopup = () => {
    gallery_detail_popup.classList.remove("show");
    gallery_detail_popup.classList.add("hidden")
}

FetchPhotos();
close_popup.addEventListener('click', ClosePopup)
function toggleServiceList(sectionId) {
    var section = document.getElementById(sectionId);
    var serviceList = section.querySelector('.service-list');
    serviceList.classList.toggle("expanded");
    if (serviceList.classList.contains("expanded")) {
        serviceList.style.maxHeight = serviceList.scrollHeight + "px";
    } else {
        serviceList.style.maxHeight = null;
    }
}

function expandServiceList(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return; // Проверяем, существует ли раздел с указанным идентификатором
    var serviceList = section.querySelector('.service-list');
    if (!serviceList) return; // Проверяем, существует ли список услуг внутри раздела
    serviceList.classList.add("expanded");
    serviceList.style.maxHeight = serviceList.scrollHeight + "px";
    
    // Прокрутка к разделу, если он находится вне области видимости
    section.scrollIntoView({ behavior: 'smooth' });
}


function openFullSizeImage(imageUrl) {
    var expandedImgContainer = document.getElementById("expanded-img-container");
    var expandedImg = document.getElementById("expanded-img");
    expandedImg.src = imageUrl;
    expandedImgContainer.style.display = "flex"; 
}

function closeFullSizeImage() {
    var expandedImgContainer = document.getElementById("expanded-img-container");
    expandedImgContainer.style.display = "none"; 
}

function changeGalleryView() {
    var gallery = document.getElementById("gallery");
    var galleryItems = gallery.querySelectorAll("li");
    if (gallery.classList.contains("horizontal")) {
        gallery.classList.remove("horizontal");
        galleryItems.forEach(function(item) {
            item.classList.remove("horizontal");
        });
    } else {
        gallery.classList.add("horizontal");
        galleryItems.forEach(function(item) {
            item.classList.add("horizontal");
        });
    }
}


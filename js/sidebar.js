const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".tab_content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(tab => { tab.classList.remove("active") });
        tab.classList.add("active");

        var line = document.querySelector(".line");
        line.style.width = (e.target.offsetWidth + 30) + "px";
        line.style.left = (e.target.offsetLeft - 10) + "px";

        all_content.forEach(content => { content.classList.remove("active") });
        all_content[index].classList.add("active");

    })

})

const busTemplate = document.querySelector('[data-bus-template]');
const busContainer = document.querySelector('[data-bus-cards-container]');
const searchInput = document.querySelector('[data-search]');

busContainer.innerHTML = '';

fetch('bus-info.php')
    .then((response) => response.json())
    .then((data) => {

        data.forEach((bus) => {
            const busCard = busTemplate.content.cloneNode(true);

            busCard.querySelector('[data-tuyenso]').textContent = bus.tuyenso;
            busCard.querySelector('[data-tentuyen]').textContent = bus.tentuyen;
            busCard.querySelector('[data-time]').textContent = `${bus.giokhoihanh} - ${bus.gioketthuc}`;
            busCard.querySelector('[data-cost]').textContent = `${bus.veluot}`;

            busContainer.appendChild(busCard);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const menu = document.querySelector(".bus-content");
const menuItems = document.querySelectorAll(".card");
const subMenuTitles = document.querySelectorAll(".subbus .bus-title");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        menu.classList.add("submenu-active");
        item.classList.add("show-submenu");
        menuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show-submenu");
            }
        });
    });
});

subMenuTitles.forEach((title) => {
    title.addEventListener("click", () => {
        menu.classList.remove("submenu-active");
    });
});

const menu_tabs = document.querySelectorAll(".tab-menu-btn");
const all_menu_content = document.querySelectorAll(".tab-menu-content");

menu_tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        menu_tabs.forEach(tab => { tab.classList.remove("active") });
        tab.classList.add("active");

        all_menu_content.forEach(content => { content.classList.remove("active") });
        all_menu_content[index].classList.add("active");

    })

})

fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (datas) {
        datas.forEach((data) => {
            const time = data.T7.substring(0, 5);
            const currentTime = "15:00";
            if (time != "00:00") {
                var div = document.createElement('div');
                div.innerHTML = '<div id="time-sheet">' + time + '</div>';
                if (time < currentTime) {
                    div.innerHTML = '<div id="time-sheet-white">' + time + '</div>';
                  } else {
                    div.innerHTML = '<div id="time-sheet-green">' + time + '</div>';
                }
                document.getElementById("bieudogio").appendChild(div);
            }

        })
    })

fetch('json.json')
.then(response => response.json())
.then(datas => {
    datas.sort(function (a, b) {
        return parseInt(a.STT) - parseInt(b.STT);
    });
    var tramdungDiv = document.getElementById("tramdung");
while (tramdungDiv.firstChild) {
    tramdungDiv.removeChild(tramdungDiv.firstChild);
}
var dotLineDiv = document.createElement('div');
dotLineDiv.innerHTML = '<div id="dot-line"></div>';
document.getElementById("tramdung").appendChild(dotLineDiv);
    datas.forEach(data => {
        var div = document.createElement('div');
        div.innerHTML = '<div id="station-name">' +
            '<div id="dot-name"></div>' + data.tentram + '</div>';
        document.getElementById("tramdung").appendChild(div);
    });
})


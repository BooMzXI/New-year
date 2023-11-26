function generateMenu() {
    const menu = `
        <div class="menu">
            <div class="nav-frame">
                <div class="nav-button" id="nav-Btns">
                    <button id="menu-button" onclick="toggleMenu()"><i class="fa-solid fa-bars"></i></button>
                </div>
                <div id="all-button">
                    <button class="nav-for-phone" id="Home-button" onclick="redirectTo('index.html')">Home</button>
                    <button class="nav-for-phone" id="Contact-button" onclick="redirectTo('contact.html')">Contact</button>
                    <button class="nav-for-phone" id="About-button" onclick="redirectTo('about.html')">About</button>
                    <button class="nav-for-phone" id="Countdown-button" onclick="redirectTo('countdown.html')">Countdown</button>
                </div>
            </div>
            <div class="tools">
                <li class="nav-bar">
                    <button class="nav" id="Home-button" onclick="redirectTo('index.html')">Home</button>
                    <button class="nav" id="Contact-button" onclick="redirectTo('contact.html')">Contact</button>
                    <button class="nav" id="About-button" onclick="redirectTo('about.html')">About</button>
                    <button class="nav" id="Countdown-button" onclick="redirectTo('countdown.html')">Countdown</button>
                </li>
            </div>
        </div>

        <div class="light">
            <div class="item">
                <div class="item-1"></div>
                <div class="circlesClass" id="circles"></div>
            </div>

            <div class="item" id="1">
                <div class="item-rope-1"></div>
                <div class="circlesClass" id="circles-1"></div>
            </div>

            <div class="item">
                <div class="item-rope-2"></div>
                <div class="circlesClass" id="circles-2"></div>
            </div>

            <div class="item" id="item3">
                <div class="item-rope-3"></div>
                <div class="circlesClass" id="circles-3"></div>
            </div>

            <div class="item" id="temp1"></div>
            <div class="item" id="temp2"></div>
            <div class="item" id="temp3"></div>
            <div class="item" id="temp4"></div>

            <div class="item" id="item4">
                <div class="item-rope-4"></div>
                <div class="circlesClass" id="circles-4"></div>
            </div>

            <div class="item" id="item5">
                <div class="item-rope-5"></div>
                <div class="circlesClass" id="circles-5"></div>
            </div>

            <div class="item" id="item6">
                <div class="item-rope-6"></div>
                <div class="circlesClass" id="circles-6"></div>
            </div>

        </div>
    `;
    
    const menuContainer = document.getElementById('menuContainer');
    
    menuContainer.innerHTML = menu;
}

generateMenu();

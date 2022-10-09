let headerText = `
         <div class="container">
            <div class="header-logo">
                <a class="text-logo" href="index.html#main-info">Scoffs</a>
            </div>
            <nav class="header-nav">
                <ul class="header-menu">
                    <li class="menu-item"><a class="header-link" href="index.html#skills">Skills</a></li>
                    <li class="menu-item"><a class="header-link" href="error.html">About me</a></li>
                    <li class="menu-item"><a class="header-link" href="error.html">Contacts</a></li>
                </ul>
            </nav>
            <div class="theme">
                <button class="btn-theme" id="btn-theme" type="button">Theme</button>
            </div>
        </div>`;

function setHeader() {
    let header =  document.createElement("header");
    header.classList.add("header");
    header.innerHTML = headerText ;
    document.body.insertAdjacentElement('afterbegin', header);
}
console.log("HEADER DONE");
setHeader();
function ready() {
    const btn = document.getElementById("header-btn")
    const btnNext = document.getElementById("my-btn-next")
    const div1 = document.getElementById("first-page")
    const div2 = document.getElementById("second-page")
    const asideContainer = document.getElementById("top-left")
    const lines = document.getElementById("lines")
    const asideMenu = document.getElementById("aside-menu")
    btn.addEventListener("click", myFunction);
    btnNext.addEventListener("click", myFunction);
    function myFunction() {
        div1.classList.toggle('hide')
        div1.classList.toggle('show')
        div2.classList.toggle('hide')
        div2.classList.toggle('show-flex')
    }
    function asideLineShow () {
        asideMenu.style.opacity = '1'
        lines.style.opacity = '1'
        lines.classList.add('lines-duration-show')
        asideMenu.classList.add('aside-menu-show')
        lines.classList.remove('lines-duration-hide')
        asideMenu.classList.remove('aside-menu-hide')
    }
    function asideLineHide () {
        lines.style.opacity = '0'
        asideMenu.style.opacity = '0'
        lines.classList.add('lines-duration-hide')
        asideMenu.classList.add('aside-menu-hide')
        lines.classList.remove('lines-duration-show')
        asideMenu.classList.remove('aside-menu-show')
    }
    asideContainer.addEventListener('mouseenter', asideLineShow)
    asideContainer.addEventListener('mouseleave', asideLineHide)

}

document.addEventListener("DOMContentLoaded", ready);


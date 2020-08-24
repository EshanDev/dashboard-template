window.onload = function () {

    var sidebarbtn = document.getElementById('ToggleMenu');
    sidebarbtn.addEventListener('click', function () {
        const sidebar = document.getElementById('offCanvasSidebar');
        const wrapper = document.getElementById('MainContainer');
        sidebar.classList.toggle('isClose');
        wrapper.classList.toggle('isOpen');
    })

}
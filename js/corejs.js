var zbal_project_core = (function () {
    return {
        projectInitial: function () {
            document.addEventListener('click', function (e) { if (e.target.classList.contains('hamburger-toggle')) { e.target.children[0].classList.toggle('active'); } }); $('.back-top-btn').click(function () { $('html, body').animate({ scrollTop: 0 }, 800) }); $(window).on('scroll', function () {
                $pageY = $(window).scrollTop(); if ($pageY > 300) { $('.back-top-btn').fadeIn(); }
                else { $('.back-top-btn').fadeOut(); }
            })
        }, keepScrollPosition: function () {
            var href = location.href.slice(0, -1); var hrefArr = href.split('/'); if (typeof (Storage) !== 'undefined') {
                var lastYPos = +localStorage.getItem('scrollYPos'); if (lastYPos) { window.scrollTo(0, lastYPos); }
                var anchors = document.querySelectorAll('.instruction-area .item'); var onNavClick = function () { localStorage.setItem('scrollYPos', window.scrollY); }; for (var i = 0; i < anchors.length; i++) { anchors[i].addEventListener('click', onNavClick); }
                if (hrefArr.at(-1) && hrefArr.at(-2) !== "/huong-dan-su-dung/" || hrefArr.at(-2) !== "/user-guideline/") { window.localStorage.removeItem("scrollYPos"); }
            }
        }, init: function () { this.projectInitial(); this.keepScrollPosition(); }
    };
}()); zbal_project_core.init();

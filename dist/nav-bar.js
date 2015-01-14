define(["require", "exports", "aurelia-framework"], function (require, exports, au) {
    var NavBar = (function () {
        function NavBar() {
        }

        NavBar.annotations = [new au.Property("router")];
        return NavBar;
    })();
    exports.NavBar = NavBar;
});

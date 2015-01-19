/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/kendo/kendo.all.d.ts"/>
/// <reference path="services/products.ts"/>
define(["require", "exports"], function(require, exports) {
    //import $ = require("jquery");
    //import k = require("kendo");
    var products = products;

    var KendoTest = (function () {
        function KendoTest() {
            alert("kendo-test constructed :)");
        }
        KendoTest.prototype.attached = function () {
            alert("kendo-test attached :)");

            var dataSource = new kendo.data.DataSource({
                data: products,
                pageSize: 21
            });

            $("#pager").kendoPager({
                dataSource: dataSource
            });

            $("#listView").kendoListView({
                dataSource: dataSource,
                template: kendo.template($("#template").html())
            });
        };
        return KendoTest;
    })();
    exports.KendoTest = KendoTest;
});
// http://demos.telerik.com/kendo-ui/content/shared/js/products.js

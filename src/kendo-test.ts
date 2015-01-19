/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/kendo/kendo.all.d.ts"/>
/// <reference path="services/products.ts"/>

//import $ = require("jquery");
//import k = require("kendo");
import products = require("./services/products");

export class KendoTest {
	constructor() {
		alert("kendo-test constructed :)");
	}

	attached() {
		alert("kendo-test attached :)");

		    var dataSource = new kendo.data.DataSource({
                data: products.productArray,
                pageSize: 21
            });

            $("#pager").kendoPager({
                dataSource: dataSource
            });

            $("#listView").kendoListView({
                dataSource: dataSource,
                template: kendo.template($("#template").html())
            });

	}
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js
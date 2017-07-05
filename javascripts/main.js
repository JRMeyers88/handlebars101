'use strict';

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');

let test = "Wut";

Handlebars.registerPartial("nav", require('../templates/partials/header.hbs'));
let testTemplate = require('../templates/test.hbs');
let solarSystemTemplate = require('../templates/solarSystem.hbs');

Handlebars.registerHelper("add", function() {
	return 2 + 2;
});

let solarSystemData = {
	planets: [
		{
			type: "rocky",
			name: "mercury",
		},
		{
			type: "rocky",
			name: "earf",
		},
		{
			type: "gassy",
			name: "saturn"
		}
	]
};

$(".output").append(testTemplate());
$(".output").append(solarSystemTemplate(solarSystemData));
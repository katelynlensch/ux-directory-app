'use strict';

function DirectoryResource($http) {
	this.$http = $http;
}

DirectoryResource.prototype.get = function(){
	var self = this;

	return this.$http.get("https://private-a73e-aquentuxsociety.apiary-mock.com/members").then(function(response) {
		return response.data;
	});
};
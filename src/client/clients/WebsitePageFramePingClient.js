/*
 *    This library provides an alternative in app browser to webview by removing specific restrictions placed upon iframe and more.
 *    Copyright (C) 2019  Ryan Molyneux
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
var WebsitePageFrameClient = require("./WebsitePageFrameClient.js").WebsitePageFrameClient;

function WebsitePageFramePingClient() {

     WebsitePageFrameClient.call(this);

};

WebsitePageFramePingClient.prototype = Object.create(WebsitePageFrameClient.prototype);
WebsitePageFramePingClient.prototype.constructor = WebsitePageFramePingClient;

WebsitePageFramePingClient.prototype.sendMessagePreChecks = function(message) {

    return true;

};

exports.WebsitePageFramePingClient = WebsitePageFramePingClient;

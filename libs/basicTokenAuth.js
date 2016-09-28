/* 
Node-OpenDroneMap Node.js App and REST API to access OpenDroneMap. 
Copyright (C) 2016 Node-OpenDroneMap Contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";

// This module provides rudimentary authentication based on a global token
// By no means shall this authentication be considered secure.
//
// It is expected that services using node-OpenDroneMap will be properly
// protected by a firewall and run within an internal network.

let fs = require('fs');
let path = require('path');
let randomstring = require('randomstring');
let config = require('../config');

module.exports = {
	initialize: function(done){

	}
};
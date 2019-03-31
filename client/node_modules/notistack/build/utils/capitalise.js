"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Capitalises a piece of string
 * @param {string} text
 */
var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

exports.default = capitalise;
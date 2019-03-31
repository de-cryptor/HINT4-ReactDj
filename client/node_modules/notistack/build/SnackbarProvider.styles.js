'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Taken from @material-ui/core/Snackbar.js styles */

var styles = exports.styles = function styles(theme) {
    var gutter = 24;
    var top = { top: 0 };
    var bottom = { bottom: 0 };
    var right = { justifyContent: 'flex-end' };
    var left = { justifyContent: 'flex-start' };
    var topSpace = { top: 0 };
    var bottomSpace = { bottom: 0 };
    var rightSpace = { right: gutter };
    var leftSpace = { left: gutter };
    var center = {
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)'
    };

    return {
        /* Styles applied to the root element. */
        root: {
            zIndex: theme.zIndex.snackbar,
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            left: 0,
            right: 0,
            backgroundColor: 'transparent !important'
        },
        /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
        anchorOriginTopCenter: _extends({}, top, _defineProperty({}, theme.breakpoints.up('md'), _extends({}, center))),
        /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
        anchorOriginBottomCenter: _extends({}, bottom, _defineProperty({}, theme.breakpoints.up('md'), _extends({}, center))),
        /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
        anchorOriginTopRight: _extends({}, top, right, _defineProperty({}, theme.breakpoints.up('md'), _extends({
            left: 'auto'
        }, topSpace, rightSpace))),
        /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
        anchorOriginBottomRight: _extends({}, bottom, right, _defineProperty({}, theme.breakpoints.up('md'), _extends({
            left: 'auto'
        }, bottomSpace, rightSpace))),
        /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
        anchorOriginTopLeft: _extends({}, top, left, _defineProperty({}, theme.breakpoints.up('md'), _extends({
            right: 'auto'
        }, topSpace, leftSpace))),
        /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
        anchorOriginBottomLeft: _extends({}, bottom, left, _defineProperty({}, theme.breakpoints.up('md'), _extends({
            right: 'auto'
        }, bottomSpace, leftSpace)))
    };
};
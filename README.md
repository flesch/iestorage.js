# iestorage.js - LocalStorage for IE7

**iestorage.js** gives the `localStorage` API to IE7 and lower.

It's really only useful in an evironment where users are forced to use Internet Explorer (*ahem, large corporations*). It doesn't care about other browsers who don't have `localStorage`, so I wouldn't consider it a very robust "[polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)" - it really only wraps IE's [userData](http://j.mp/rJ4ZZj) in a familiar API.

## Usage

Conditionally include `iestorage.js`.

    <!--[if lte IE 7]>
    <script src="iestorage.js"></script>
    <![endif]-->

Then just use `window.localStorage` like normal.

## Limitations

  - You must use the `getItem` and `setItem` methods. You can't add properties directly to the `localStorage` object - otherwise data isn't saved to `userData`.

## License

Released under the MIT License: [http://flesch.mit-license.org](http://flesch.mit-license.org)
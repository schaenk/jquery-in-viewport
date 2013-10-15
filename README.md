jQuery Plugin - inViewport
==========================

jQuery Plugin to check if an element is visible in the current viewport.

Usage
-----

```javascript
if($('#element').inViewport(orientation)) {
  // do something smart here
}
```

The optional parameter 'orientation' defines if the whole element (default), it's width ('horizontal') or only it's height ('vertical') needs to be visible.

```javascript
$('#element').inViewport('vertical'); // return true if the full height of the element is visible
```
```javascript
$('#element').inViewport('horizontal'); // return true if the full width of the element is visible
```

Licence
-------
MIT

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/57a5c8f4123dd7d9caffad613c6f77d5 "githalytics.com")](http://githalytics.com/schaenk/jquery-in-viewport)

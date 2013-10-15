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

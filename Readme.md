# AcronymJS

jQuery plugin which translate acronyms and ABBRs in the small caps.


## Using

### Include

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="jquery.acronym.min.js"></script>
```

### Сall

```javascript
$("p").acronym();
```


## Properties

`tracking`

Letter-spacing. Amount of space between a group of letters in a line or block of text.
Is letter-spacing CSS rule. Indicated in em or px.

Default value: 0.15em.

`size`

Small caps font size. Indicated in em or px and percents.

Default value: 90%.

```javascript
$("p, h1").acronym({
    tracking: "0.15em",
    size: "90%"
});
```


## Demo

See [Live Demo](http://gleero.com/demo/acronymJS/index.html)


## Build


Install [Grunt](http://gruntjs.com), go to `src` folder and type

```
grunt
```

## Release History

### 2013-02-09 v1.0.0

* First public version.
# jQuery xeyes

This is a simple jQuery plugin that is meant to emulate the classic xeyes program. While it doesn't have many native uses, some very creative people managed to incorporate it into their projects. If you have any questions or need help using this script, contact <a href="http://twitter.com/#!/felix_mc" target="_blank">@felix_mc</a>.

Additional documentation <a href="http://felixmilea.com/2014/12/jquery-xeyes-redux/" target="_blank">here</a>.

## Examples
- http://jsbin.com/butexi/15/edit?html,output
- http://jsbin.com/caxupu/1/edit
- http://jsbin.com/caxupu/2/edit
- http://jsbin.com/caxupu/3/edit
- http://jsbin.com/caxupu/4/edit
- http://jsbin.com/caxupu/5/edit
- http://jsbin.com/caxupu/6/edit
- http://jsbin.com/caxupu/7/edit

### External
- http://birondesign.com/Portfolio/ via [@birondesign](http://twitter.com/#!/birondesign)
- http://sheepfilms.co.uk/interact/eyes.htm via [sheepfilms.co.uk](http://sheepfilms.co.uk/)
- http://www.skoolpal.com/ via [@eskhool](http://twitter.com/#!/eskhool)

## Basic Usage

The plugin requires two block level elements, the eye and the iris. For the plugin to work properly, it also requires that they each have proper dimensions defined using CSS.

```html
<div class="eyeball">
    <div class="iris"></div>
</div>
```

```css
.eyeball {
    width: 110px;
    height: 150px;
    background: #fff;
}
 
.iris {
    width: 25px;
    height: 25px;
    background: #000;
}
```

Finally, to initialize the plugin, simply call the js function on the `iris` element:

```js
$('.iris').xeyes();
```

The plugin will automatically assume that its immidiate parent will be used as the `eyeball` element. The `eyeball` class was only required for the styling.


## Configuration

*All* of the following are optional. You can use them to further customize this plugin.

 - **padding:** refers to the distance in pixels between the iris and the edge of the eyeball, similar to padding in CSS. The default value is `0`. <a class="jsbin-embed" href="http://jsbin.com/caxupu/1/embed?output"  target="_blank">Example</a>

 - **position:** refers to the initial position the iris should be in prior to following the mouse. The following string values are supported: `center`, `top`, `bottom`, `left`, `right`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`. A number can also be provided, which will be interpreted as an angle in degrees at which to point the eyes at. Lastly, a javascript object with `x` and `y` properties as integers is also accepted. The properties will be used to offset the iris from the center of the eye. The default value is "center". <a class="jsbin-embed" href="http://jsbin.com/caxupu/2/embed?output" target="_blank">Example 1</a> <a class="jsbin-embed" href="http://jsbin.com/caxupu/3/embed?output" target="_blank">Example 2</a> <a class="jsbin-embed" href="http://jsbin.com/caxupu/4/embed?output" target="_blank">Example 3</a>

 - **reset:** a boolean value that determines whether the eyes should return to their initial position when the mouse exits the trigger. The default value is false. In the following example, the initial position is set to `topRight` and the trigger is set to the red box. When you hover over the red box, the eyes should follow the mouse. However, when the mouse leaves the red box, they will return to the top right position. <a class="jsbin-embed" href="http://jsbin.com/caxupu/6/embed?output" target="_blank">Example</a>

 - **trigger:** refers to the html element that triggers the eyes to follow the cursor. By default this is `window`, meaning that the eyes will follow the cursor everywhere on a page. Acceptable value for this parameter are any valid jQuery selector strings as well as any jQuery wrapped set returned by the jQuery selector. In other words, both `".trigger"` and `$(".trigger")` are valid options that will have the same result. In the following example the trigger is set to be the red box. <a class="jsbin-embed" href="http://jsbin.com/caxupu/5/embed?output" target="_blank">Example</a>

 - **radius:** determines the shape of the iris movement. It supports two string values `circular` and `natural`. `natural` makes the iris follow the natural shape of eye, while `circular` forces the path of the iris to be a perfect circle. The default value is `natural`. Below is an example of `circular`. <a class="jsbin-embed" href="http://jsbin.com/caxupu/7/embed?output" target="_blank">Example</a>

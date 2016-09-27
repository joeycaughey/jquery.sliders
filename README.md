# jquery.sliders

jquery.sliders is a responsive slider that separates the function Javascript entirely from the structure and styling of the slides allowing for maximum flexibility.


----------------------------------------------------
HTML
----------------------------------------------------
```html
<div class="slider" id="slider">
  <div class="viewport">
      <ul class="slides">
          <li data-background="/_assets/images/slideimage.jpg">
              <div class="callout right">
                  <h2>HEADER</h2>
                  <p>
                      Lorem ipsum dolor sit amet, no est eruditi mentitum definitiones. Mentitum ullamcorper id pri, ex petentium erroribus interpretaris nec.
                  </p>
              </div>
          </li>
          <li data-background="/_assets/images/slideimage.jpg">
              <div class="callout left">
                  <h2>HEADER</h2>
                  <p>
                     Usu ridens adversarium ne, id decore munere cum. Eu usu quodsi eloquentiam, te nec minim partem. Cum dolorem placerat an, ei autem dolor convenire mel. Vel ea omittam recusabo, vim no idque verterem deserunt, ut nostrud philosophia mediocritatem vix.
                  </p>
              </div>
          </li>
      </ul>
  </div>
  <div style="clear: both;"></div>
</div>
```

----------------------------------------------------
Initialization and Options
----------------------------------------------------

```javascript
$("#slider").init({
    show: 1,
    autoplay: false,
    random: false,
    hidebuttons: false,
    rows: 1
});

```


----------------------------------------------------
Styling the Slider
----------------------------------------------------

There is a set styling to the initial sliders setup.  The main holder defined with “.slider” is set to 100% of the width of the parent element and the view port as well.   Never adjust the styles in the asset stylesheet but overwrite them in your main stylesheet for things like the next, preview, dot markers, and callouts.

The reason for this is to make the slide content as flexible as possible.  You don’t have to use the standard “callout” and can put and position any elements you want on the slide with HTML and CSS and they will become part of the slide feature automatically.


CALLOUT ALIGNMENT
The callout has four alignment classes that can be added to the html for anchor placement.
```text
“left” - Anchor to the left side of the slide
“right” - Anchor to the right side of the slide
“top” - Anchor to the top of the slide
“bottom” - Anchor to the bottom of the slide
```

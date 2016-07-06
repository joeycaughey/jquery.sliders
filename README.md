# jquery.sliders

jquery.sliders is a responsive slider that separates the function Javascript entirely from the structure and styling of the slides allowing for maximum flexibility.


----------------------------------------------------
HTML
----------------------------------------------------
```
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

```
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


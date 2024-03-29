Notes:
1. We use font shorthand to make sure the correct font-weight, font-size, and line-height are used together. [Learn more on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font#live_sample);
2. We use [lower_snake_case](https://en.wikipedia.org/wiki/Snake_case) naming convention so variable can be used in javascript without quotation marks. We avoid camelCase because the name may contain two adjacent numbers such as `landing_48_600`, which would be ambiguously spelt as `landing48600` in camelCase.
3. We use `px14` insteald `14px` to make dereference legal in JavaScript. Otherwise, user needs to switch to array notation. 
4. The design system expose properties for every possible state. Applying the properties to the corresponding state is an implementation detail outside the scope of the design system.
e.g. the design system has no opinion on which one of the follow three implementations is used, as long as the correct style appears when mouse is over the element
    1. use css `:hover` selector
    2. add/remove a styles on DOM `mouseenter` and `mouseleave` events
    3. use css-in-js libary such as [styled-components](https://www.styled-components.com/) or [fela](https://github.com/rofrischmann/fela).  
5. We use sigular form for naming objects to better align with css naming convention: `font` instead of `fonts`. `box_shadow` instead of `box_shadows`.
6. In control properties, keys with an underscore, e.g. the `_enabled` in `control.button._enabled`, suggests a drill-in is needed. Keys without underscore can be directly consumed, e.g. the `text_color` in `control.button._disabled.text_color`.
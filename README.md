# pseudo-css-support

__Detecting Support__ - CSS [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) and CSS [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- It's totally based on [testing-support-for-focus-visible](https://www.abeautifulsite.net/posts/testing-support-for-focus-visible/)


```js
 <script type="module">

  import { pseudoCssSupport } from './index.mjs';

  console.log(':focus-visible ', pseudoCssSupport(':focus-visible'));
  console.log('::part(foo) ', pseudoCssSupport('::part(foo)'));
  console.log(':has(foo) ', pseudoCssSupport(':has(foo)'));
  console.log(':playing ', pseudoCssSupport(':playing'));

  </script>
```

# pseudo-css-support

**Detecting Support** - CSS [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) and CSS [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- It's totally based on [testing-support-for-focus-visible](https://www.abeautifulsite.net/posts/testing-support-for-focus-visible/)

<br>

> Demo: https://stackblitz.com/github/oscarmarina/pseudo-css-support?file=README.md

```js
<script type="module">
  import { pseudoCssSupport } from '@blockquote/pseudo-css-support'

  console.info(':focus-visible ', pseudoCssSupport(':focus-visible'));

  console.info('::part(foo) ', pseudoCssSupport('::part(foo)'));

  console.info(':has(foo) ', pseudoCssSupport(':has(foo)'));

  console.info(':lang(xx-XX) ', pseudoCssSupport(':lang(xx-XX)'));

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@property
  console.info('@property --property-name ', pseudoCssSupport('@property --property-name'));

  // https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context
  console.info(':host-context(foo) ', pseudoCssSupport(':host-context(foo)'));

  // https://developer.mozilla.org/en-US/docs/Web/CSS/:playing
  console.info(':playing ', pseudoCssSupport(':playing'));
</script>
```

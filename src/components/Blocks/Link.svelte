<style>
  .Link {
    color: var(--accent);
    text-decoration: none;
  }

  .Link :global(.Icon) {
    display: inline-block;
    margin-left: 4px;
  }

  .Link :global(.Icon--dropdown_16) {
    position: relative;
    top: 1px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let href = '';

  const platform = usePlatform();
</script>

<!-- 
@component
Надстройка над `<a />`.

```jsx
<Link href="https://google.com" target="_blank">Google</Link>
<Link href="/profile">Profile</Link>
```
-->

<a
  href="{href}"
  {...$$restProps}
  class="{classNames(getClassName('Link', $platform), $$props.class)}"
>
  <slot />
</a>

<style>
  .Div--ios {
    padding: 12px;
  }

  .Div--android {
    padding: 12px 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Caption from '../Typography/Caption.svelte';

  export let size: 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24 = 48;
  export let src: string;
  export let alt: string = 'avatar';
  export let mode: 'default' | 'image' | 'app' = 'default';
  export let shadow: boolean = true;

  const platform = usePlatform();

  let borderRadius: string = '50%';

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = '4';
      break;
    case 'app':
      borderRadius = Math.floor((size * 10) / 48).toString();
      break;
  }

  const SLOTS = $$props.$$slots;
</script>

<!-- 
@component
Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

**Важно:** свойство `style` применяется к `img`, а не к корневому элементу. Чаще всего требуется стилизовать именно изображение, а не обертку.

```tsx
<Avatar src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"/>
```
-->

<div
  class="{classNames(getClassName('Avatar', platform), $$props.class, `Avatar--type-${mode}`, `Avatar--sz-${size}`)}"
>
  <div class="Avatar__in" style="{`width: ${size}px; height: ${size}px`}">
    {#if src}
      <img
        {...$$restProps}
        class="Avatar__img"
        src="{src}"
        alt="{alt}"
        style="{$$props.style + `; border-radius:${borderRadius}`}"
      />
    {:else}
      <div
        {...$$restProps}
        class="Avatar__img"
        src="{src}"
        style="{$$props.style + `; border-radius:${borderRadius}`}"
      ></div>
    {/if}

    {#if shadow}
      <span
        class="Avatar__shadow"
        style="{`border-radius:${borderRadius}`}"
      ></span>
    {/if}

    {#if SLOTS && SLOTS.default}
      <div
        className="Avatar__children"
        style="{`width: ${size}px, height: ${size}px; border-radius:${borderRadius}`}"
      >
        <slot />
      </div>
    {/if}
  </div>
</div>

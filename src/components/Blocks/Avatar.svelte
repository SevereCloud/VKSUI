<style>
  .Avatar {
    box-sizing: border-box;
  }

  .Avatar__in {
    position: relative;
    color: var(--icon_secondary);
  }

  .Avatar__img {
    background: var(--placeholder_icon_background);
    border: none;
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .Avatar__shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px var(--image_border);
    pointer-events: none;
    z-index: 2;
  }

  .Avatar__children {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let size:
    | 96
    | 80
    | 72
    | 64
    | 56
    | 48
    | 44
    | 40
    | 36
    | 32
    | 28
    | 24 = 48;
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
    {#if $$props.src}
      <img
        {...$$restProps}
        class="Avatar__img"
        src="{$$props.src}"
        alt="{$$props.alt}"
        style="{$$props.style + `; border-radius:${borderRadius}`}"
      />
    {:else}
      <div
        {...$$restProps}
        class="Avatar__img"
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
        class="Avatar__children"
        style="{`width: ${size}px, height: ${size}px; border-radius:${borderRadius}`}"
      >
        <slot />
      </div>
    {/if}
  </div>
</div>

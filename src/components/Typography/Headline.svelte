<style>
  .Headline {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .Headline--w-regular {
    font-weight: 400;
  }

  .Headline--w-medium {
    font-weight: 500;
  }

  .Headline--w-semibold {
    font-weight: 600;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import { ANDROID } from '../../lib/platform';

  export let weight: 'regular' | 'medium' | 'semibold';

  const platform = usePlatform();

  let headlineWeight = weight;

  if ($platform === ANDROID && weight === 'semibold') {
    headlineWeight = 'medium';
  }
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<Div>
  <Headline weight="regular" style="margin-bottom: 16px">Headline regular</Headline>
  <Headline weight="medium" style="margin-bottom: 16px">Headline medium</Headline>
  <Headline weight="semibold" style="margin-bottom: 16px">Headline semibold</Headline>
</Div>
```
-->

{#if $platform === ANDROID}
  <h3
    {...$$restProps}
    class="{classNames(getClassName('Headline', $platform), `Headline--w-${headlineWeight}`, $$props.class)}"
  >
    <slot />
  </h3>
{:else}
  <h4
    {...$$restProps}
    class="{classNames(getClassName('Headline', $platform), `Headline--w-${headlineWeight}`, $$props.class)}"
  >
    <slot />
  </h4>
{/if}

<style>
  .Subhead {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
  }

  .Subhead--w-regular {
    font-weight: 400;
  }

  .Subhead--w-medium {
    font-weight: 500;
  }

  .Subhead--w-semibold {
    font-weight: 600;
  }

  .Subhead--w-bold {
    font-weight: 600;
  }

  .InfoRow__header {
    margin-bottom: 2px;
    color: var(--text_secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import { ANDROID } from '../../lib/platform';

  export let weight: 'regular' | 'medium' | 'semibold' | 'bold';

  const platform = usePlatform();

  let subheadWeight = weight;

  if ($platform === ANDROID && weight === 'semibold') {
    subheadWeight = 'medium';
  }
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<Div>
  <Subhead weight="regular" style="margin-bottom: 16px">Subhead regular</Subhead>
  <Subhead weight="medium" style="margin-bottom: 16px">Subhead medium</Subhead>
  <Subhead weight="semibold" style="margin-bottom: 16px">Subhead semibold</Subhead>
  <Subhead weight="bold" style="margin-bottom: 16px">Subhead bold</Subhead>
</Div>
```
-->

{#if $platform === ANDROID}
  <h4
    {...$$restProps}
    class="{classNames(getClassName('Subhead', $platform), `Subhead--w-${subheadWeight}`, $$props.class)}"
  >
    <slot />
  </h4>
{:else}
  <h5
    {...$$restProps}
    class="{classNames(getClassName('Subhead', $platform), `Subhead--w-${subheadWeight}`, $$props.class)}"
  >
    <slot />
  </h5>
{/if}

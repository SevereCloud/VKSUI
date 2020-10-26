<style>
  .Text {
    font-size: 15px;
    line-height: 20px;
  }

  .Text--w-regular {
    font-weight: 400;
  }

  .Text--w-medium {
    font-weight: 500;
  }

  .Text--w-semibold {
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

  let textWeight = weight;

  if ($platform === ANDROID && weight === 'semibold') {
    textWeight = 'medium';
  }
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<Div>
  <Text weight="regular" style="margin-bottom: 16px">Text regular</Text>
  <Text weight="medium" style="margin-bottom: 16px">Text medium</Text>
  <Text weight="semibold" style="margin-bottom: 16px">Text semibold</Text>
</Div>
```
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('Text', $platform), `Text--w-${textWeight}`, $$props.class)}"
>
  <slot />
</div>

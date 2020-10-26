<style>
  .Title {
    margin: 0;
  }

  .Title--l-1 {
    font-size: 24px;
    line-height: 28px;
  }

  .Title--l-2 {
    font-size: 20px;
    line-height: 24px;
  }

  .Title--l-3 {
    font-size: 17px;
    line-height: 22px;
  }

  .Title--w-regular {
    font-weight: 400;
  }

  .Title--w-medium {
    font-weight: 500;
  }

  .Title--w-semibold {
    font-weight: 600;
  }

  .Title--w-bold {
    font-weight: 700;
  }

  .Title--w-heavy {
    font-weight: 800;
  }
</style>

<script lang="ts">
  import Headline from './Headline.svelte';
  import { ANDROID } from '../../lib/platform';
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let level: '1' | '2' | '3';
  export let weight: 'heavy' | 'bold' | 'semibold' | 'medium' | 'regular';

  const platform = usePlatform();

  let titleWeight = weight;
  let headlineWeight: 'regular' | 'medium' | 'semibold';
  if ($platform === ANDROID) {
    if (level === '3') {
      switch (weight) {
        case 'heavy':
        case 'bold':
        case 'semibold':
          headlineWeight = 'medium';
          break;
        default:
          headlineWeight = weight;
      }
    }
    if (level === '1' && weight === 'heavy') {
      titleWeight = 'bold';
    }
    if (level === '2') {
      switch (weight) {
        case 'heavy':
          titleWeight = 'bold';
          break;
        case 'semibold':
          titleWeight = 'medium';
      }
    }
  }
</script>

<!-- 
@component
Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`
* `heavy` превращается в `bold`
* `<Title level="3" />` превращается в `<Headline />`

```jsx
<Div>
  <Title level="1" weight="semibold" style="margin-bottom: 16px">Title 1 semibold</Title>
  <Title level="1" weight="bold" style="margin-bottom: 16px">Title 1 bold</Title>
  <Title level="1" weight="heavy" style="margin-bottom: 16px">Title 1 heavy</Title>
  <Title level="2" weight="regular" style="margin-bottom: 16px">Title 2 regular</Title>
  <Title level="2" weight="semibold" style="margin-bottom: 16px">Title 2 semibold</Title>
  <Title level="2" weight="heavy" style="margin-bottom: 16px">Title 2 heavy</Title>
  <Title level="3" weight="regular" style="margin-bottom: 16px">Title 3 regular</Title>
  <Title level="3" weight="medium" style="margin-bottom: 16px">Title 3 medium</Title>
  <Title level="3" weight="semibold">Title 3 semibold</Title>
</Div>
```
-->

{#if level === '3' && $platform === ANDROID}
  <Headline {...$$restProps} weight="{headlineWeight}" class="{$$props.class}">
    <slot />
  </Headline>
{:else if level === '1'}
  <h1
    {...$$restProps}
    class="{classNames(getClassName('Title', $platform), `Title--w-${titleWeight}`, `Title--l-${level}`, $$props.class)}"
  >
    <slot />
  </h1>
{:else if level === '2'}
  <h2
    {...$$restProps}
    class="{classNames(getClassName('Title', $platform), `Title--w-${titleWeight}`, `Title--l-${level}`, $$props.class)}"
  >
    <slot />
  </h2>
{:else if level === '3'}
  <h3
    {...$$restProps}
    class="{classNames(getClassName('Title', $platform), `Title--w-${titleWeight}`, `Title--l-${level}`, $$props.class)}"
  >
    <slot />
  </h3>
{:else}
  <div
    {...$$restProps}
    class="{classNames(getClassName('Title', $platform), `Title--w-${titleWeight}`, `Title--l-${level}`, $$props.class)}"
  >
    <slot />
  </div>
{/if}

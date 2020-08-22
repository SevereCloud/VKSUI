<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';


  const platform = usePlatform();
</script>

<!-- 
@component
Контейнер для однородных `Cell`.
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('List', platform), $$props.class)}"
>
  <slot />
</div>

<style>
  .Separator__in {
    height: 1px;
    background: var(--separator_common);
    transform-origin: center top;
  }

  @media (min-resolution: 2dppx) {
    .Separator__in {
      transform: scaleY(0.5);
    }
  }

  @media (min-resolution: 3dppx) {
    .Separator__in {
      transform: scaleY(0.32);
    }
  }

  .Separator:not(.Separator--wide).Separator--ios .Separator__in {
    margin-left: 12px;
    margin-right: 12px;
  }

  .Separator:not(.Separator--wide).Separator--android .Separator__in {
    margin-left: 16px;
    margin-right: 16px;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  export let wide = false;

  const platform = usePlatform();
</script>

<!-- 
@component
Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `wide`.
-->

<div
  {...$$restProps}
  class="{classNames(getClassName('Separator', platform), $$props.class, {
    'Separator--wide': wide,
  })}"
>
  <div class="Separator__in"></div>
</div>

<style>
  .Progress {
    border-radius: 2px;
    background: var(--placeholder_icon_background);
  }

  .Progress__in {
    height: 4px;
    border-radius: 2px;
    transition: width 0.2s ease;
    background: var(--accent);
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';

  export let value = 0;

  const platform = usePlatform();
</script>

<div
  {...$$restProps}
  class="{classNames(getClassName('Progress', $platform), $$props.class)}"
>
  <div class="Progress__bg"></div>
  <div class="Progress__in" style={'width:' + `${value}%`}></div>
</div>

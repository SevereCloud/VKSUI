<style>
  .File__input {
    display: none;
  }
</style>

<script lang="ts">
  import usePlatform from '../../hooks/usePlatform';
  import classNames from '../../lib/classNames';
  import getClassName from '../../lib/getClassName';
  import Button from '../Blocks/Button.svelte';
  import label from '../Elements/label.svelte';

  export let before: any = undefined;
  export let after: any = undefined;

  export let mode:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline'
    | 'commerce'
    | 'destructive'
    | 'overlay_primary'
    | 'overlay_secondary'
    | 'overlay_outline' = 'primary';
  export let controlSize: 'm' | 'l' | 'xl' = 'm';
  export let stretched: boolean = false;
  export let align: 'left' | 'center' | 'right' = 'center';
  export let style: string = '';

  const platform = usePlatform();
</script>

<!-- 
@component
Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства.
`File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.
-->

<Button
  align={align}
  class={classNames(getClassName('File', $platform), $$props.class)}
  Component={label}
  stretched={stretched}
  mode={mode}
  size={controlSize}
  before={before}
  after={after}
  style={style}
  disabled={$$restProps.disabled}
>
  <div slot="before"><slot name="before"/></div>
  <div slot="after"><slot name="after"/></div>
  <input {...$$restProps} class="File__input" type="file"/>
  <slot>Выберите файл</slot>
</Button>

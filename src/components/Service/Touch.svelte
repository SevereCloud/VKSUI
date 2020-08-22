<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let cancelClick = false;

  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   *
   * @param {Object} e Браузерное событие
   * @returns {void}
   */
  const onDragStart = (e: DragEvent) => {
    const target = e.target as HTMLElement;
    console.log(target.tagName);

    if (target.tagName === 'A' || target.tagName === 'IMG') {
      e.preventDefault();
    }
  };

  /**
   * Обработчик клика по компоненту
   * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
   *
   * @param {Object} e Браузерное событие
   * @returns {void}
   */
  const onClick = (e: MouseEvent): void => {
    if (cancelClick) {
      cancelClick = false;
      e.preventDefault();
    }
    dispatch('click', e);
  };
</script>

<!-- 
@component
Touch – это компонент для удобной работы с pointer событиями, такими как клик, тап, перетаскивание и т.д.
Он инкапсулирует в себе логику обработки вышеперечисленных событий, дает возможность отдельно реагировать на движение
пальца (или мышки) по осям X и Y, а так же предоставляет данные о геометрии жеста.

Компонент используется во многих других компонентах библиотеки (Cell, Slider, Gallery, Tappable).
-->

<div {...$$restProps} on:click="{onClick}" on:dragstart="{onDragStart}">
  <slot />
</div>

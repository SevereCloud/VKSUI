<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let cancelClick = false;

  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   *
   * @param {Object} e Браузерное событие
   * @returns {void}
   */
  const onDragStart = (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "IMG") {
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
  const onClick = (e) => {
    if (cancelClick) {
      cancelClick = false;
      e.preventDefault();
    }
    dispatch("click", e);
  };
</script>

<div on:click={onClick} on:dragstart={onDragStart}>
  <slot />
</div>

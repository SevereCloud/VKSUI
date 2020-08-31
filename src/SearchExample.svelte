<script context="module">
  const thematics = [
    { id: 3201, name: 'Аренда автомобилей' },
    { id: 3273, name: 'Автотовары' },
    { id: 3205, name: 'Автосалон' },
    { id: 3282, name: 'Автосервис' },
    { id: 3283, name: 'Услуги для автовладельцев' },
    { id: 3284, name: 'Велосипеды' },
    { id: 3285, name: 'Мотоциклы и другая мототехника' },
    { id: 3286, name: 'Водный транспорт' },
    { id: 3287, name: 'Автопроизводитель' },
    { id: 3288, name: 'Автомойка' },
    { id: 3117, name: 'Автошкола' },
    { id: 3118, name: 'Детский сад' },
    { id: 3119, name: 'Гимназия' },
    { id: 3120, name: 'Колледж' },
    { id: 3121, name: 'Лицей' },
    { id: 3122, name: 'Техникум' },
    { id: 3123, name: 'Университет' },
    { id: 3124, name: 'Школа' },
    { id: 3125, name: 'Институт' },
    { id: 3126, name: 'Обучающие курсы' },
    { id: 3276, name: 'Дополнительное образование' },
    { id: 3275, name: 'Тренинг, семинар' },
    { id: 3127, name: 'Танцевальная школа' },
  ];
</script>

<script>
  import SimpleCell from './components/Blocks/SimpleCell.svelte';
  import List from './components/Blocks/List.svelte';
  import Search from './components/Blocks/Search.svelte';

  import { Icon24Filter } from '@sveltevk/icons';

  let search = '';

  $: searchThematics = thematics.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1,
  );
</script>

<Search bind:value="{search}" />
{#if searchThematics.length > 0}
  <List>
    {#each searchThematics as thematic}
      <SimpleCell disabled>{thematic.name}</SimpleCell>
    {/each}
  </List>
{/if}

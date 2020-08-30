<style>
  .achivment {
    background-color: rgb(101, 192, 99);
    background-image: url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg);
    background-position: right bottom;
    background-size: 320px;
    background-repeat: no-repeat;
  }
  .ads {
    background-color: rgb(91, 155, 230);
    background-image: url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg);
    background-position: right bottom;
    background-size: 102%;
    background-repeat: no-repeat;
  }
  .basta {
    background-color: rgb(0, 0, 0);
    background-image: url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg);
    background-position: right bottom;
    background-size: 340px;
    background-repeat: no-repeat;
  }
</style>

<script>
  import Banner from './components/Blocks/Banner.svelte';
  import Header from './components/Blocks/Header.svelte';
  import Link from './components/Blocks/Link.svelte';
  import Avatar from './components/Blocks/Avatar.svelte';
  import Group from './components/Blocks/Group.svelte';
  import Button from './components/Blocks/Button.svelte';

  import { Icon24Play, Icon28MusicOutline } from '@sveltevk/icons';

  const musicGradient =
    'linear-gradient(135deg, #ADE6FF 0%, #ABE3FF 1%, #A7DCFF 3%, #A0CFFF 7%, #97BCFF 12%, #8DA4FF 19%, #8285FF 26%, #8B76FF 34%, #9C6AFF 43%, #B05FFF 52%, #C655FF 62%, #DB4CFF 71%, #EE45FF 81%, #FA41FF 91%, #FF3FFF 100%)';
  const warningGradient = 'linear-gradient(90deg, #ffb73d 0%, #ffa000 100%)';
</script>

<Group>
  <div slot="header">
    <Header mode="secondary">Content: Tint</Header>
  </div>
  <Banner
    header="Баста в Ледовом"
    subheader="Большой концерт"
    asideMode="dismiss"
  >
    <div slot="before">
      <Avatar
        size="{96}"
        mode="image"
        src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
      />
    </div>
    <div slot="actions">
      <Button>Подробнее</Button>
    </div>
  </Banner>

  <Banner header="Для Вас" subheader="Обновлено сегодня">
    <div slot="before">
      <Avatar
        size="{96}"
        mode="image"
        src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
      />
    </div>
    <div slot="actions">
      <Button>
        <div slot="before">
          <Icon24Play />
        </div>
        СЛУШАТЬ
      </Button>
    </div>
  </Banner>

  <Banner
    header="Подписка за рубль!"
    subheader="Предложение действует только до конца февраля"
    asideMode="dismiss"
  >
    <div slot="before">
      <Avatar mode="image" style="{`background-image: ${musicGradient}`}">
        <Icon28MusicOutline fill="#fff" />
      </Avatar>
    </div>
    <div slot="actions">
      <Button mode="primary">Подробнее</Button>
      <Button mode="tertiary">Напомнить позже</Button>
    </div>
  </Banner>

  <Banner
    header="Сегодня день рождения Михаила Лихачёва"
    subheader="Подарите подарок"
    asideMode="dismiss"
  >
    <div slot="before">
      <Avatar
        size="{48}"
        src="https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1"
      />
    </div>
    <div slot="actions">
      <Button mode="primary">Подарить</Button>
    </div>
  </Banner>

  <Banner header="Телефон ожидает подтверждения">
    <div slot="before">
      <Avatar size="{28}" style="{`background-image: ${warningGradient}`}">
        <span style="color: #fff">!</span>
      </Avatar>
    </div>
    <div slot="subheader">
      Новый номер +7 ••• ••• •• 96 будет сохранён через семь дней.
      <br />
      <Link>Ускорьте процесс</Link>
      , если у Вас есть
      <br />
      доступ к старому номеру.
    </div>
    <div slot="actions">
      <Button mode="tertiary">Отменить заявку</Button>
    </div>
  </Banner>

  <Banner text="Хотите, чтобы вам меньше мешали? Включите режим «невидимка»!">
    <div slot="before">
      <Avatar
        src="https://sun9-7.userapi.com/q9qBUh4kGND1pTUytY4LwljtRLWoCXaIzN7C2A/52lM85R5kus.jpg"
      />
    </div>
    <div slot="actions">
      <Button>Включить</Button>
      <Button mode="tertiary">Подробнее</Button>
    </div>
  </Banner>

  <Banner
    header="Больше интересных подкастов в каталоге"
    subheader="Найдите интересующие именно Вас подкасты!"
    asideMode="expand"
    on:click="{() => console.log('[Podcast banner] onClick')}"
  />
</Group>

<Group>
  <div slot="header">
    <Header mode="secondary">Content: Image</Header>
  </div>
  <Banner
    mode="image"
    header="Мои достижения"
    subheader="Разблокировано 9 из 36"
  >
    <div slot="actions">
      <Button mode="overlay_primary">Подробнее</Button>
    </div>
    <div slot="background" class="achivment"></div>
  </Banner>
</Group>

<Header>Medium size</Header>

<Group>
  <div slot="header">
    <Header mode="secondary">Content: Tint</Header>
  </div>
  <Banner size="m" header="Реклама сообщества" asideMode="dismiss">
    <div slot="subheader">
      <span>
        Привлекайте больше людей
        <br />
        в Ваше сообщество
      </span>
    </div>
    <div slot="actions">
      <Button mode="primary" size="l">Подробнее</Button>
    </div>
  </Banner>
</Group>

<Group>
  <div slot="header">
    <Header mode="secondary">Content: Image</Header>
  </div>
  <Banner
    mode="image"
    size="m"
    header="Реклама в сообществе"
    asideMode="dismiss"
  >
    <div slot="subheader">
      <span>
        Привлекайте больше людей
        <br />
        в Ваше сообщество
      </span>
    </div>
    <div slot="background" class="ads"></div>
    <div slot="actions">
      <Button mode="overlay_primary" size="l">Подробнее</Button>
    </div>
  </Banner>

  <Banner
    mode="image"
    size="m"
    subheader="Москва · 12 декабря"
    asideMode="dismiss"
  >
    <div slot="header">
      <span>
        Баста в Ледовом,
        <br />
        большой концерт
      </span>
    </div>
    <div slot="background" class="basta"></div>
    <div slot="actions">
      <Button mode="overlay_primary" size="l">Подробнее</Button>
    </div>
  </Banner>
</Group>

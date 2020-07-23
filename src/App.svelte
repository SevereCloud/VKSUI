<script lang="ts">
	import Div from "./components/Blocks/Div.svelte";
	import Caption from "./components/Typography/Caption.svelte";
	import Progress from "./components/Blocks/Progress.svelte";
	import './styles/styles.css'
	import './styles/bright_light.css'
import Title from "./components/Typography/Title.svelte";
import ScreenSpinner from "./components/Popouts/ScreenSpinner.svelte";
import CardGrid from "./components/Blocks/CardGrid.svelte";
import Card from "./components/Blocks/Card.svelte";
import Header from "./components/Blocks/Header.svelte";
import Separator from "./components/Blocks/Separator.svelte";
import Link from "./components/Blocks/Link.svelte";
import Switch from "./components/Blocks/Switch.svelte";
import Avatar from "./components/Blocks/Avatar.svelte";

console.log(Avatar.prototype);

	let open = false;
</script>

<main>
	<Title level="1" weight="bold">Caption</Title>
	<Div>
    <Header>
      Рекомендации
    </Header>
    <Separator />
    <Header>
      <div slot="aside">
        <Link>Показать все</Link>
      </div>
      Плейлисты
    </Header>
    <Separator />
    <Header>
      <div slot="aside">
        <Link>Показать все</Link>
      </div>
      Мои видео
    </Header>
    <Separator />
    <!-- <Header aside={<Icon24Dismiss />}>
      Недавние
    </Header>
    <Separator />
    <Header  aside={<Link>Показать все</Link>}>
      Заявки в друзья
    </Header>
    <Separator />
    <Header subtitle="SOHN — Conrad" aside={<Link>Показать все</Link>}>
      Похожее на
    </Header>
    <div style={`margin-bottom: 100px`}/>
    <Separator />
    <Header mode="secondary">Важные</Header>
    <Separator />
    <Header mode="secondary" aside={<Link>Показать все</Link>}>
      Приглашения
    </Header>
    <Separator />
    <Header mode="secondary" indicator="667" aside={<Icon16Chevron />}>
      Фотографии
    </Header>
    <Separator />
    <Header mode="secondary" indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link>Показать все</Link>}>
      Приглашения
    </Header> -->
	  </Div>
	<Div>
    <Progress value={32}/>
  </Div>
  <Div>
    <CardGrid>
      <Card size="l">
        <div style="height: 96px" />
      </Card>
      <Card size="m">
        <div style="height: 96px" />
      </Card>
      <Card size="m">
        <div style="height: 96px" />
      </Card>
      <Card size="s">
        <div style="height: 96px" />
      </Card>
      <Card size="s">
        <div style="height: 96px" />
      </Card>
      <Card size="s">
        <div style="height: 96px" />
      </Card>
      <Card size="l">
        <div style="height: 96px" />
      </Card>
    </CardGrid>
  </Div>
  <Avatar src="https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1"/>
  


  <div on:click={()=>{open=!open}}>OPEN</div>

  {#if open}
 	<ScreenSpinner>Test</ScreenSpinner> 
  {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
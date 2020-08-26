<style>
  main {
    max-width: 900px;
    margin: 0 auto;
  }
  .Example {
    height: 667px;
    width: 375px;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: block;
    margin: auto;
  }
</style>

<script lang="ts">
  import Div from './components/Blocks/Div.svelte';
  import Progress from './components/Blocks/Progress.svelte';
  import './styles/constants.css';
  import './styles/styles.css';
  import './styles/bright_light.css';
  import Title from './components/Typography/Title.svelte';
  import Caption from './components/Typography/Caption.svelte';
  import Text from './components/Typography/Text.svelte';
  import Subhead from './components/Typography/Subhead.svelte';
  import CardGrid from './components/Blocks/CardGrid.svelte';
  import SimpleCell from './components/Blocks/SimpleCell.svelte';
  import Gradient from './components/Blocks/Gradient.svelte';
  import CardScroll from './components/Blocks/CardScroll.svelte';
  import Card from './components/Blocks/Card.svelte';
  import Header from './components/Blocks/Header.svelte';
  import Separator from './components/Blocks/Separator.svelte';
  import Link from './components/Blocks/Link.svelte';
  import Avatar from './components/Blocks/Avatar.svelte';
  import SSRWrapper from './components/Service/SSRWrapper.svelte';
  import Group from './components/Blocks/Group.svelte';
  import Headline from './components/Typography/Headline.svelte';
  import Panel from './components/Layout/Panel.svelte';
  import Switch from './components/Blocks/Switch.svelte';
  import InfoRow from './components/Blocks/InfoRow.svelte';
  import List from './components/Blocks/List.svelte';
  import Footer from './components/Blocks/Footer.svelte';
  import UsersStack from './components/Blocks/UsersStack.svelte';
  import Counter from './components/Blocks/Counter.svelte';
  import Spinner from './components/Blocks/Spinner.svelte';
  import MiniInfoCell from './components/Blocks/MiniInfoCell.svelte';
  import TouchExample from './TouchExample.svelte';

  import {
    Icon16Dropdown,
    Icon24Dismiss,
    Icon16Chevron,
    Icon28UserOutline,
    Icon28PaletteOutline,
    Icon28SettingsOutline,
    Icon28MessageOutline,
    Icon20ArticleOutline,
    Icon20FollowersOutline,
    Icon20GlobeOutline,
    Icon20WorkOutline,
    Icon20Info,
  } from '@sveltevk/icons';
</script>

<main>
  <Div>
    <Title level="1" weight="heavy">Layout</Title>
    <Panel>
      <div class="Example">test</div>
    </Panel>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Popouts</Title>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Modals</Title>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Blocks</Title>
    <Div>
      <Title level="2" weight="semibold">Button</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">CellButton</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Div</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Link</Title>
      <div class="Example">
        <Link href="https://google.com" target="_blank">Google</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Header</Title>
      <div class="Example">
        <Header>Рекомендации</Header>
        <Separator />
        <Header>
          <div slot="aside">
            <Link>Показать все</Link>
          </div>
          Плейлисты
        </Header>
        <Separator />
        <Header indicator="{16}">
          <div slot="aside">
            <Link>
              Добавленные
              <Icon16Dropdown />
            </Link>
          </div>
          Мои видео
        </Header>
        <Separator />
        <Header>
          <div slot="aside">
            <Icon24Dismiss />
          </div>
          Недавние
        </Header>
        <Separator />
        <Header>
          <div slot="aside">
            <Link>Показать все</Link>
          </div>
          <div slot="indicator">
            <Counter size="s" mode="prominent">3</Counter>
          </div>
          Заявки в друзья
        </Header>
        <Separator />
        <Header subtitle="SOHN — Conrad">
          <div slot="aside">
            <Link>Показать все</Link>
          </div>
          Похожее на
        </Header>
        <div style="margin-bottom: 100px"></div>
        <Separator />
        <Header mode="secondary">Важные</Header>
        <Separator />
        <Header mode="secondary">
          <div slot="aside">
            <Link>Показать все</Link>
          </div>
          Приглашения
        </Header>
        <Separator />
        <Header mode="secondary" indicator="667">
          <div slot="aside">
            <Icon16Chevron />
          </div>
          Фотографии
        </Header>
        <Separator />
        <Header mode="secondary">
          <div slot="aside">
            <Link>Показать все</Link>
          </div>
          <div slot="indicator">
            <Counter size="s" mode="prominent">3</Counter>
          </div>
          Приглашения
        </Header>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Group</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Card</Title>
      <div class="Example">
        <Group separator="hide">
          <div slot="header">
            <Header mode="secondary">Дефолтный стиль</Header>
          </div>
          <CardGrid>
            <Card size="l">
              <div style="height: 96px"></div>
            </Card>
          </CardGrid>
        </Group>
        <Group separator="hide">
          <div slot="header">
            <Header mode="secondary">С внутренней обводкой</Header>
          </div>
          <CardGrid>
            <Card size="l" mode="outline">
              <div style="height: 96px"></div>
            </Card>
          </CardGrid>
        </Group>
        <Group separator="hide">
          <div slot="header">
            <Header mode="secondary">С внешней тенью</Header>
          </div>
          <CardGrid>
            <Card size="l" mode="shadow">
              <div style="height: 96px"></div>
            </Card>
          </CardGrid>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">CardGrid</Title>
      <div class="Example">
        <CardGrid>
          <Card size="l">
            <div style="height: 96px"></div>
          </Card>
          <Card size="m">
            <div style="height: 96px"></div>
          </Card>
          <Card size="m">
            <div style="height: 96px"></div>
          </Card>
          <Card size="s">
            <div style="height: 96px"></div>
          </Card>
          <Card size="s">
            <div style="height: 96px"></div>
          </Card>
          <Card size="s">
            <div style="height: 96px"></div>
          </Card>
          <Card size="l">
            <div style="height: 96px"></div>
          </Card>
        </CardGrid>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">CardScroll</Title>
      <div class="Example">
        <Group
          separator="hide"
          description="Рекомендуемый размер карточки — 144px"
        >
          <CardScroll>
            <Card size="s">
              <div style="width: 144px; height: 96px"></div>
            </Card>
            <Card size="s">
              <div style="width: 144px; height: 96px"></div>
            </Card>
            <Card size="s">
              <div style="width: 144px; height: 96px"></div>
            </Card>
            <Card size="s">
              <div style="width: 144px; height: 96px"></div>
            </Card>
          </CardScroll>
        </Group>
        <Group
          separator="hide"
          description="Рекомендуемый размер карточки — 224px"
        >
          <CardScroll>
            <Card size="m">
              <div style="width: 224px; height: 96px"></div>
            </Card>
            <Card size="m">
              <div style="width: 224px; height: 96px"></div>
            </Card>
            <Card size="m">
              <div style="width: 224px; height: 96px"></div>
            </Card>
          </CardScroll>
        </Group>
        <Group
          separator="hide"
          description="Ширина карточки <Card size='l' /> зафиксирована в CSS
          так, чтобы каждая карточка занимала всю ширину вьюпорта"
        >
          <CardScroll>
            <Card size="l">
              <div style="height: 96px"></div>
            </Card>
            <Card size="l">
              <div style="height: 96px"></div>
            </Card>
            <Card size="l">
              <div style="height: 96px"></div>
            </Card>
          </CardScroll>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Gradient</Title>
      <div class="Example">
        <Gradient>
          <Group>
            <div slot="header">
              <Header subtitle="С быстрым входом">
                <div slot="aside">
                  <Link>Показать все</Link>
                </div>
                Другие сервисы VK
              </Header>
            </div>
            <CardScroll style="padding-bottom: 20px">
              <Card mode="outline" size="s">
                <div style="width: 144px; height: 96px"></div>
              </Card>
              <Card mode="outline" size="s">
                <div style="width: 144px; height: 96px"></div>
              </Card>
              <Card mode="outline" size="s">
                <div style="width: 144px; height: 96px"></div>
              </Card>
              <Card mode="outline" size="s">
                <div style="width: 144px; height: 96px"></div>
              </Card>
            </CardScroll>
          </Group>
        </Gradient>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Cell</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">SimpleCell</Title>
      <div class="Example">
        <Group>
          <Header mode="secondary">Меню</Header>
          <SimpleCell expandable>
            <div slot="before">
              <Icon28UserOutline />
            </div>
            Аккаунт
          </SimpleCell>
          <SimpleCell expandable>
            <div slot="before">
              <Icon28PaletteOutline />
            </div>
            Внешний вид
          </SimpleCell>
          <SimpleCell expandable>
            <div slot="before">
              <Icon28SettingsOutline />
            </div>
            Основные
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Настройки</Header>
          <SimpleCell disabled>
            <div slot="after">
              <Switch checked />
            </div>
            Сжимать фотографии
          </SimpleCell>
          <SimpleCell disabled>
            <div slot="after">
              <Switch />
            </div>
            Сжимать видео
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Настройки системы</Header>
          <SimpleCell expandable indicator="Русский">Язык</SimpleCell>
          <SimpleCell expandable indicator="При использовании">
            Геолокация
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Список диалогов</Header>
          <SimpleCell>
            <div slot="before">
              <Avatar
                size="{40}"
                src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"
              />
            </div>
            <div slot="after">
              <Icon28MessageOutline />
            </div>
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell>
            <div slot="before">
              <Avatar
                size="{40}"
                src="https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1"
              />
            </div>
            <div slot="after">
              <Icon28MessageOutline />
            </div>
            Artur Stambultsian
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Список друзей</Header>
          <SimpleCell description="Команда ВКонтакте">
            <div slot="before">
              <Avatar
                size="{40}"
                src="https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"
              />
            </div>
            <div slot="after">
              <Icon28MessageOutline />
            </div>
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell description="Бот">
            <div slot="before">
              <Avatar
                size="{40}"
                src="https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1"
              />
            </div>
            <div slot="after">
              <Icon28MessageOutline />
            </div>
            Artur Stambultsian
          </SimpleCell>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">RichCell</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">List</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Footer</Title>
      <div class="Example">
        <Group>
          <List>
            <SimpleCell description="Веб-сайт">
              <div slot="before">
                <Avatar size="{48}" />
              </div>
              Команда ВКонтакте
            </SimpleCell>
            <SimpleCell description="Музыкант">

              <div slot="before">
                <Avatar size="{48}" />
              </div>
              Robbie Williams
            </SimpleCell>
            <SimpleCell description="Издательский дом">

              <div slot="before">
                <Avatar size="{48}" />
              </div>
              ПостНаука
            </SimpleCell>
          </List>
        </Group>
        <Footer>3 cообщества</Footer>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Spinner</Title>
      <div
        class="Example"
        style="display: flex;align-items: center; flex-direction: column"
      >
        <Spinner size="large" style="margin-top: 20px" />
        <Spinner size="medium" style="margin-top: 20px" />
        <Spinner size="regular" style="margin-top: 20px" />
        <Spinner size="small" style="margin-top: 20px" />
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">PanelSpinner</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Switch</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">InfoRow</Title>
      <div class="Example">
        <Group>
          <SimpleCell>
            <InfoRow header="Общий бюджет">3000 р.</InfoRow>
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Информация о пользователе</Header>
          <SimpleCell multiline>
            <InfoRow header="Дата рождения">30 января 1993</InfoRow>
          </SimpleCell>
          <SimpleCell>
            <InfoRow header="Родной город">Ереван</InfoRow>
          </SimpleCell>
          <SimpleCell>
            <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
          </SimpleCell>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Avatar</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Gallery</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Progress</Title>
      <div class="Example">
        <Group>
          <Div>
            <InfoRow header="Default">
              <Progress value="{40}" />
            </InfoRow>
          </Div>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Search</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Tabs</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">TabsItem</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Tooltip</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">PullToRefresh</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Counter</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">UsersStack</Title>
      <div class="Example">
        <Group>
          <UsersStack
            photos="{['https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1']}"
          >
            Понравилось Муртолу Левзачеву
          </UsersStack>
        </Group>

        <Group>
          <UsersStack
            photos="{['https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1']}"
            size="m"
          >
            Настя и Jean пойдут на это мероприятие
          </UsersStack>
        </Group>

        <Group>
          <UsersStack
            photos="{['https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1']}"
          >
            Иван и ещё 2 ваших друга подписаны
          </UsersStack>
        </Group>

        <Group>
          <div slot="header">
            <Header mode="secondary">Вертикальный режим</Header>
          </div>
          <UsersStack
            photos="{['https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1']}"
            size="m"
            count="{3}"
            layout="vertical"
          >
            Алексей, Илья, Михаил
            <br />
            и ещё 3 человека
          </UsersStack>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Separator</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Placeholder</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Banner</Title>
      <div class="Example"></div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">MiniInfoCell</Title>
      <div class="Example">
        <MiniInfoCell textWrap="short">
          <div slot="before">
            <Icon20ArticleOutline />
          </div>
          ВКонтакте начинался как сайт для выпускников вузов, а сейчас это
          огромная экосистема с безграничными возможностями и миллионами
          пользователей.
        </MiniInfoCell>

        <MiniInfoCell>
          <div slot="before">
            <Icon20FollowersOutline />
          </div>
          <div slot="after">
            <UsersStack
              photos="{['https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1', 'https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1', 'https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1']}"
            />
          </div>
          514,7K подписчиков · 77 друзей
        </MiniInfoCell>

        <MiniInfoCell>
          <div slot="before">
            <Icon20GlobeOutline />
          </div>
          <Link href="https://vk.com/team">vk.com/team</Link>
        </MiniInfoCell>

        <MiniInfoCell>
          <div slot="before">
            <Icon20WorkOutline />
          </div>
          <div slot="after">
            <Avatar
              size="{24}"
              src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"
            />
          </div>
          Место работы: Команда ВКонтакте
        </MiniInfoCell>

        <MiniInfoCell
          mode="add"
          onClick="{() => console.log('Указать место учёбы')}"
        >
          <div slot="before">
            <Icon20WorkOutline />
          </div>
          Укажите место учёбы
        </MiniInfoCell>

        <MiniInfoCell
          mode="more"
          onClick="{() => console.log('Показать подробную информацию')}"
        >
          <div slot="before">
            <Icon20Info />
          </div>
          Подробная информация
        </MiniInfoCell>
      </div>
    </Div>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Forms</Title>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Typography</Title>
    <Div>
      <Title level="2" weight="semibold">Title</Title>
      <div class="Example">
        <Title level="1" weight="semibold" style="margin-bottom: 16px">
          Title 1 semibold
        </Title>
        <Title level="1" weight="bold" style="margin-bottom: 16px">
          Title 1 bold
        </Title>
        <Title level="1" weight="heavy" style="margin-bottom: 16px">
          Title 1 heavy
        </Title>
        <Title level="2" weight="regular" style="margin-bottom: 16px">
          Title 2 regular
        </Title>
        <Title level="2" weight="semibold" style="margin-bottom: 16px">
          Title 2 semibold
        </Title>
        <Title level="2" weight="heavy" style="margin-bottom: 16px">
          Title 2 heavy
        </Title>
        <Title level="3" weight="regular" style="margin-bottom: 16px">
          Title 3 regular
        </Title>
        <Title level="3" weight="medium" style="margin-bottom: 16px">
          Title 3 medium
        </Title>
        <Title level="3" weight="semibold" style="margin-bottom: 16px">
          Title 3 semibold
        </Title>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Headline</Title>
      <div class="Example">
        <Headline weight="regular" style="margin-bottom: 16px">
          Headline regular
        </Headline>
        <Headline weight="medium" style="margin-bottom: 16px">
          Headline medium
        </Headline>
        <Headline weight="semibold" style="margin-bottom: 16px">
          Headline semibold
        </Headline>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Text</Title>
      <div class="Example">
        <Text weight="regular" style="margin-bottom: 16px">Text regular</Text>
        <Text weight="medium" style="margin-bottom: 16px">Text medium</Text>
        <Text weight="semibold" style="margin-bottom: 16px">Text semibold</Text>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Subhead</Title>
      <div class="Example">
        <Subhead weight="regular" style="margin-bottom: 16px">
          Subhead regular
        </Subhead>
        <Subhead weight="medium" style="margin-bottom: 16px">
          Subhead medium
        </Subhead>
        <Subhead weight="semibold" style="margin-bottom: 16px">
          Subhead semibold
        </Subhead>
        <Subhead weight="bold" style="margin-bottom: 16px">
          Subhead bold
        </Subhead>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Caption</Title>
      <div class="Example">
        <Caption level="1" weight="semibold" style="margin-bottom: 16px">
          Caption 1 semibold
        </Caption>
        <Caption level="1" weight="bold" style="margin-bottom: 16px">
          Caption 1 bold
        </Caption>
        <Caption level="1" weight="regular" style="margin-bottom: 16px">
          Caption 1 regular
        </Caption>
        <Caption level="1" weight="regular" caps style="margin-bottom: 16px">
          Caption CAPS 1 regular
        </Caption>
        <Caption level="2" weight="regular" style="margin-bottom: 16px">
          Caption 2 regular
        </Caption>
        <Caption level="2" weight="semibold" style="margin-bottom: 16px">
          Caption 2 semibold
        </Caption>
        <Caption level="2" weight="regular" style="margin-bottom: 16px">
          Caption 2 regular
        </Caption>
        <Caption level="2" weight="regular" caps style="margin-bottom: 16px">
          Caption CAPS 2 regular
        </Caption>
        <Caption level="3" weight="regular" style="margin-bottom: 16px">
          Caption 3 regular
        </Caption>
        <Caption level="3" weight="semibold" caps style="margin-bottom: 16px">
          Caption CAPS 3 semibold
        </Caption>
        <Caption level="4" weight="regular" style="margin-bottom: 16px">
          Caption 4 regular
        </Caption>
        <Caption level="4" weight="semibold" caps>
          Caption CAPS 4 semibold
        </Caption>
      </div>
    </Div>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Service</Title>
    <Div>
      <Title level="2" weight="semibold">Touch</Title>
      <div class="Example">
        <Group>
          <div slot="header">
            <Header mode="secondary">Перетащите кружок</Header>
          </div>
          <TouchExample />
        </Group>
      </div>
    </Div>
  </Div>

  <Div>
    <Title level="1" weight="heavy">Server Side Rendering</Title>
    <Div>
      <SSRWrapper userAgent="android">
        <Div>Android Div</Div>
      </SSRWrapper>
      <SSRWrapper userAgent="iphone">
        <Div>iPhone Div</Div>
      </SSRWrapper>
    </Div>
  </Div>
</main>

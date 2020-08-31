<style>
  main {
    max-width: 900px;
    margin: 0 auto;
  }
  .Example {
    height: 667px;
    width: 375px;
    overflow-y: auto;
    border: 1px solid var(--background_highlighted);
    display: block;
    margin: auto;
    background: var(--background_content);
  }
  .fixable {
    display: flex;
    padding: 8px;
    top: 0;
    right: 0;
    position: fixed;
  }
  .fixable div {
    display: flex;
    padding: 6px;
  }
  :global(body) {
    background: var(--background_page);
  }

  .userStack {
    background-image: linear-gradient(135deg, #f24973 0%, #3948e6 100%);
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 6px;
    border-radius: 12px;
  }
</style>

<script lang="ts">
  import Div from './components/Blocks/Div.svelte';
  import Progress from './components/Blocks/Progress.svelte';
  import './styles/constants.css';
  import './styles/styles.css';
  import './styles/bright_light.css';
  import './styles/space_gray.css';
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
  import Button from './components/Blocks/Button.svelte';
  import CellButton from './components/Blocks/CellButton.svelte';
  import Placeholder from './components/Blocks/Placeholder.svelte';
  import Tabs from './components/Blocks/Tabs.svelte';
  import TabsItem from './components/Blocks/TabsItem.svelte';
  import PromoBanner from './components/Advertisement/PromoBanner.svelte';
  import HorizontalScroll from './components/Layout/HorizontalScroll.svelte';
  import type { BannerData } from './components/Advertisement/PromoBanner.svelte';

  import TouchExample from './TouchExample.svelte';
  import BannerExample from './BannerExample.svelte';
  import SearchExample from './SearchExample.svelte';

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
    Icon28MoonOutline,
    Icon16Add,
    Icon24Camera,
    Icon24Shuffle,
    Icon24Add,
    Icon56UsersOutline,
    Icon56MentionOutline,
    Icon28Notifications,
    Icon28BlockOutline,
    Icon28SlidersOutline,
    Icon28UsersOutline,
    Icon28FavoriteOutline,
    Icon28SortHorizontalOutline,
  } from '@sveltevk/icons';

  // Разные настройки для тем
  import { setContext } from 'svelte';
  import { SSRContextKey, SSRBuildContext } from './lib/ssr';

  // userAgent
  let userAgent =
    window.localStorage.getItem('userAgent') === 'iphone'
      ? 'iphone'
      : 'android';
  setContext(SSRContextKey, SSRBuildContext({ userAgent }));

  const changeUserAgent = () => {
    userAgent = userAgent === 'android' ? 'iphone' : 'android';
    window.localStorage.setItem('userAgent', userAgent);
    document.location.reload();
  };

  // scheme
  const setScheme = (s) => {
    const schemeAttribute = document.createAttribute('scheme');
    schemeAttribute.value = s;
    document.body.attributes.setNamedItem(schemeAttribute);
  };

  let scheme =
    window.localStorage.getItem('scheme') === 'space_gray'
      ? 'space_gray'
      : 'bright_light';
  setScheme(scheme);

  const changeScheme = () => {
    scheme = scheme === 'bright_light' ? 'space_gray' : 'bright_light';
    setScheme(scheme);
    window.localStorage.setItem('scheme', scheme);
  };

  // Всякое для примеров

  const promoBannerProps: BannerData = {
    title: 'Заголовок',
    domain: 'vk.com',
    trackingLink: 'https://vk.com',
    ctaText: 'Перейти',
    advertisingLabel: 'Реклама',
    iconLink:
      'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
    description: 'Описание рекламы',
    ageRestrictions: '14+',
    statistics: [
      { url: '', type: 'playbackStarted' },
      { url: '', type: 'click' },
    ],
  };

  let activeTab2 = 'music';
</script>

<div class="fixable">
  <div on:click="{changeUserAgent}">
    <Icon28SortHorizontalOutline />
  </div>
  <div on:click="{changeScheme}">
    <Icon28MoonOutline />
  </div>
</div>

<main>
  <Div>
    <Title level="1" weight="heavy">Layout</Title>
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
      <div class="Example">
        <Group>
          <div slot="header">
            <Header mode="secondary">Типы кнопок</Header>
          </div>
          <Div>
            <Button>Primary</Button>
          </Div>
          <Div>
            <Button mode="secondary">Secondary</Button>
          </Div>
          <Div>
            <Button mode="tertiary">Tertiary</Button>
          </Div>
          <Div>
            <Button mode="outline">Outline</Button>
          </Div>
          <Div>
            <Button mode="commerce">Commerce</Button>
          </Div>
          <Div>
            <Button mode="destructive">Destructive</Button>
          </Div>
          <Div style="background: #232323">
            <Button mode="overlay_primary">Overlay Primary</Button>
          </Div>
          <Div style="background: #232323">
            <Button mode="overlay_secondary">Overlay Secondary</Button>
          </Div>
          <Div style="background: #232323">
            <Button mode="overlay_outline">Overlay Outline</Button>
          </Div>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Допустимые размеры</Header>
          </div>
          <Div>
            <Button>Medium</Button>
          </Div>
          <Div>
            <Button size="l">Large</Button>
          </Div>
          <Div>
            <Button size="xl" mode="secondary">Extra large</Button>
          </Div>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Растягивание по ширине</Header>
          </div>
          <Div>
            <Button size="l">No stretch</Button>
          </Div>
          <Div style="display: flex">
            <Button size="l" stretched style="margin-right: 8px">
              Stretched
            </Button>
            <Button size="l" stretched mode="secondary">Stretched</Button>
          </Div>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Кнопки с иконками</Header>
          </div>
          <Div>
            <Button>
              <div slot="before">
                <Icon16Add />
              </div>
              Add item
            </Button>
          </Div>
          <Div>
            <Button size="l">
              <div slot="before">
                <Icon24Camera />
              </div>
              Take a photo
            </Button>
          </Div>
          <Div>
            <Button mode="secondary" size="l">
              <div slot="before">
                <Icon24Shuffle />
              </div>
              Shuffle
            </Button>
          </Div>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Ссылки в виде кнопок</Header>
          </div>
          <Div>
            <Button href="#">I am link</Button>
          </Div>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">CellButton</Title>
      <div class="Example">
        <Group>
          <div slot="header">
            <Header mode="secondary">Кнопка-ячейка</Header>
          </div>
          <CellButton>Добавить новую школу</CellButton>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Стилизация</Header>
          </div>
          <CellButton mode="danger">Покинуть беседу</CellButton>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Кнопка c иконкой</Header>
          </div>
          <CellButton>
            <div slot="before">
              <Icon24Add />
            </div>
            Добавить родственника
          </CellButton>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Div</Title>
      <div class="Example">
        <Group>
          <Div>
            <Button stretched mode="secondary" size="l">Edit Info</Button>
          </Div>
        </Group>
      </div>
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
      <div class="Example">
        <div>
          <Group>
            <div slot="header">
              <Header mode="secondary">Media Upload</Header>
            </div>
            <SimpleCell>
              <div slot="after">
                <Switch defaultChecked />
              </div>
              Comppress Photos
            </SimpleCell>
            <SimpleCell>
              <div slot="after">
                <Switch />
              </div>
              Compress Videos
            </SimpleCell>
          </Group>
          <Group
            description="Allow access to location services to attach your
            location to messages, posts, photos and stories, to improve ads in
            your news feed and optimize content and friend suggestions"
            separator="show"
          >
            <div slot="header">
              <Header mode="secondary">System settings</Header>
            </div>
            <SimpleCell indicator="While Using" expandable>Location</SimpleCell>
          </Group>
        </div>
        <Group>
          <div slot="header">
            <Header mode="secondary">Other</Header>
          </div>
          <SimpleCell indicator="Wi-Fi" expandable>Autoplay Media</SimpleCell>
          <SimpleCell expandable>Stickers</SimpleCell>
        </Group>
      </div>
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
          <SimpleCell
            expandable
            on:click="{() => {
              console.log('AOA');
            }}"
          >
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
      <div class="Example">
        <SearchExample />
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Tabs</Title>
      <div class="Example">
        <Tabs>
          <TabsItem
            on:click="{() => (activeTab2 = 'music')}"
            selected="{activeTab2 === 'music'}"
          >
            Моя музыка
          </TabsItem>
          <TabsItem
            on:click="{() => (activeTab2 = 'recomendations')}"
            selected="{activeTab2 === 'recomendations'}"
          >
            Рекомендации
          </TabsItem>
        </Tabs>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">TabsItem</Title>
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
      <div class="Example">
        <Group>
          <div slot="header">
            <Header mode="secondary">Счётчики в ячейках</Header>
          </div>
          <List>
            <SimpleCell>
              <div slot="indicator">
                <Counter>4</Counter>
              </div>
              <div slot="before">
                <Icon28UserOutline />
              </div>
              Друзья
            </SimpleCell>
            <SimpleCell>
              <div slot="indicator">
                <Counter mode="primary">2</Counter>
              </div>
              <div slot="before">
                <Icon28UsersOutline />
              </div>
              Группы
            </SimpleCell>
            <SimpleCell>
              <div slot="indicator">
                <Counter>224</Counter>
              </div>
              <div slot="before">
                <Icon28MessageOutline />
              </div>
              Сообщения
            </SimpleCell>
            <SimpleCell>
              <div slot="indicator">
                <Counter mode="primary">1</Counter>
              </div>
              <div slot="before">
                <Icon28FavoriteOutline />
              </div>
              Закладки
            </SimpleCell>
          </List>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">Счётчики в кнопках</Header>
          </div>
          <Div>
            <Button mode="secondary" size="l">
              <div slot="after">
                <Counter>16</Counter>
              </div>
              Secondary large
            </Button>
          </Div>
          <Div>
            <Button mode="tertiary">
              <div slot="after">
                <Counter>6</Counter>
              </div>
              Tertiary medium
            </Button>
          </Div>
          <Div>
            <Button mode="outline" size="l">
              <div slot="after">
                <Counter>20</Counter>
              </div>
              Outline large
            </Button>
          </Div>
          <Div>
            <Button mode="commerce" size="l">
              <div slot="after">
                <Counter>4</Counter>
              </div>
              Commerce large
            </Button>
          </Div>
          <Div>
            <Button size="xl">
              <div slot="after">
                <Counter>8</Counter>
              </div>
              Primary extra large
            </Button>
          </Div>
        </Group>
        <Group>
          <div slot="header">
            <Header>
              <div slot="indicator">
                <Counter size="s" mode="prominent">5</Counter>
              </div>
              <div slot="aside">
                <Link>Посмотреть все</Link>
              </div>
              Заявки в друзья
            </Header>
          </div>
          <SimpleCell>
            <div slot="before">
              <Avatar />
            </div>
            Александр Сорокин
          </SimpleCell>
          <SimpleCell>
            <div slot="before">
              <Avatar />
            </div>
            Виктор Пелевин
          </SimpleCell>
          <SimpleCell>
            <div slot="before">
              <Avatar />
            </div>
            Михаил Зыгарь
          </SimpleCell>
        </Group>
        <Group>
          <div slot="header">
            <Header mode="secondary">В переключателях</Header>
          </div>
          <Tabs mode="buttons">
            <HorizontalScroll>
              <TabsItem>
                <div slot="after">
                  <Counter size="s">8</Counter>
                </div>
                Все
              </TabsItem>
              <TabsItem selected>
                <div slot="after">
                  <Counter size="s">24</Counter>
                </div>
                Люди
              </TabsItem>
              <TabsItem>
                <div slot="after">
                  <Counter size="s">2</Counter>
                </div>
                Сообщества
              </TabsItem>
              <TabsItem>Музыка</TabsItem>
            </HorizontalScroll>
          </Tabs>
          <Tabs>
            <TabsItem>
              <div slot="after">
                <Counter size="s">6</Counter>
              </div>
              Диалоги
            </TabsItem>
            <TabsItem selected>
              <div slot="after">
                <Counter size="s">24</Counter>
              </div>
              Сообщения
            </TabsItem>
          </Tabs>
        </Group>
      </div>
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

        <Group>
          <Div>
            <div class="userStack">
              <UsersStack
                photos="{['https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1', 'https://sun9-69.userapi.com/c206728/v206728108/15b1b9/YpxKXVzlvaA.jpg?ava=1']}"
                style="color: #fff"
              >
                Проголосовали 2 176 человек
              </UsersStack>
            </div>
          </Div>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Separator</Title>
      <div class="Example">
        <Group>
          <div slot="header">
            <Header mode="secondary">Сепаратор</Header>
          </div>
          <SimpleCell>
            <div slot="before">
              <Icon28Notifications />
            </div>
            Уведомления
          </SimpleCell>
          <SimpleCell>
            <div slot="before">
              <Icon28BlockOutline />
            </div>
            Не беспокоить
          </SimpleCell>

          <Separator style="{'margin: 12px 0'}" />

          <SimpleCell>
            <div slot="before">
              <Icon28UserOutline />
            </div>
            Учётная запись
          </SimpleCell>
          <SimpleCell>
            <div slot="before">
              <Icon28SlidersOutline />
            </div>
            Основные
          </SimpleCell>
        </Group>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Placeholder</Title>
      <div class="Example">
        <Placeholder header="Уведомления от сообществ">
          <div slot="icon">
            <Icon56UsersOutline />
          </div>
          <div slot="action">
            <Button size="l">Подключить сообщества</Button>
          </div>
          Подключите сообщества, от которых Вы хотите получать уведомления
        </Placeholder>
        <Separator wide />
        <Placeholder>
          <div slot="icon">
            <Icon56MentionOutline />
          </div>
          Введите адрес страницы в поле поиска
        </Placeholder>
      </div>
    </Div>
    <Div>
      <Title level="2" weight="semibold">Banner</Title>
      <div class="Example">
        <BannerExample />
      </div>
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
          on:click="{() => console.log('Указать место учёбы')}"
        >
          <div slot="before">
            <Icon20WorkOutline />
          </div>
          Укажите место учёбы
        </MiniInfoCell>

        <MiniInfoCell
          mode="more"
          on:click="{() => console.log('Показать подробную информацию')}"
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
    <Title level="1" weight="heavy">Advertisement</Title>
    <Div>
      <Title level="2" weight="semibold">PromoBanner</Title>
      <div class="Example">
        <PromoBanner bannerData="{promoBannerProps}" />
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

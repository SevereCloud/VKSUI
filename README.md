# VKSUI draft

[VKUI](https://github.com/VKCOM/VKUI), но для [Svelte](https://svelte.dev/)

## Процесс портирования

В работе

### Components

- [ ] Layout
  - [ ] Root
  - [ ] View
  - [ ] Panel
  - [ ] PanelHeader
  - [ ] PanelHeaderButton
  - [ ] PanelHeaderBack
  - [ ] PanelHeaderClose
  - [ ] PanelHeaderSubmit
  - [ ] PanelHeaderEdit
  - [ ] PanelHeaderContent
  - [ ] PanelHeaderContext
  - [ ] Epic
  - [ ] Tabbar
  - [ ] TabbarItem
  - [ ] FixedLayout
  - [x] HorizontalScroll
  - [ ] Popouts
  - [ ] PopoutWrapper
  - [ ] ActionSheet
  - [ ] ActionSheetItem
  - [ ] Alert
  - [ ] ScreenSpinner
  - [ ] Snackbar
- [ ] Modals
  - [ ] ModalRoot
  - [ ] ModalPage
  - [ ] ModalPageHeader
  - [ ] ModalCard
- [ ] Blocks
  - [ ] Button
  - [ ] CellButton
  - [x] Div
  - [x] Link
  - [x] Header
  - [x] Group
  - [x] Card
  - [x] CardGrid
  - [x] CardScroll
  - [x] Gradient
  - [ ] Cell
  - [ ] SimpleCell
  - [ ] RichCell
  - [x] List
  - [x] Footer
  - [ ] Spinner
  - [ ] PanelSpinner
  - [x] Switch
  - [x] InfoRow
  - [x] Avatar
  - [ ] Gallery
  - [x] Progress
  - [ ] Search
  - [x] Tabs
  - [ ] TabsItem
  - [ ] Tooltip
  - [ ] PullToRefresh
  - [x] Counter
  - [x] UsersStack
  - [x] Separator
  - [ ] Placeholder
  - [ ] Banner
  - [ ] MiniInfoCell
- [ ] Forms
  - [ ] FormLayout
  - [ ] FormLayoutGroup
  - [ ] FormStatus
  - [ ] Slider
  - [ ] RangeSlider
  - [ ] Radio
  - [ ] Checkbox
  - [ ] Input
  - [ ] Select
  - [ ] SelectMimicry
  - [ ] Textarea
  - [ ] File
  - [ ] CustomSelect
  - [ ] DatePicker
  - [ ] SliderSwitch
- [x] Typography
  - [x] Title
  - [x] Headline
  - [x] Text
  - [x] Subhead
  - [x] Caption
- [ ] Advertisement
  - [ ] PromoBanner
- [ ] Service
  - [ ] ConfigProvider
  - [ ] Touch

### SSR

- [x] Поддержка userAgent для SSR

### Icons

- [ ] Поддержка иконок

### Документация

- [ ] Придумать как реализовать

Нужно написать свой styleguide для svelte.

- [Разбор компонента на составляющие](https://github.com/sveltejs/language-tools/blob/da988890f42621cf2917a990796e06beda06aa15/packages/svelte2tsx/src/svelte2tsx.ts#L67)
  - набор атрибутов, переменных и slots
  - документация (`@component`)
  - код tsx
- [Исходники сайта svelte.dev](https://github.com/sveltejs/svelte/tree/master/site)
  - можно стащить компоненты и дизайн
  - проверить возможность использования repl
- Документация должна генерироваться
  - использовать SSR

### Всячина

- [ ] Сделать компоненты как компоненты
- [ ] Прикрутить 100500 линтеров
- [ ] Починить prettierrc
- [ ] Прикрутить github-action
- [ ] Создать отдельную организацию для Svelte VKUI
- [ ] Продумать нейминг
- [ ] Проверить [VKUI#444](https://github.com/VKCOM/VKUI/issues/444)

---
title: Тема оформления Hyprland
summary: Первая статья из серии статей про конфигурацию Hyprland. В ней я расскажу как настроил тему оформления, а именно внешний вид окон и виджетов, курсор и иконки.
categories:
  - Настройка Hyprland со всеми красивостями
tags:
  - linux
  - hyprland
date: 2024-01-14T21:18:00
draft: true
---

Это первая статья из серии статей про конфигурацию Hyprland. В ней я расскажу, как настроил тему оформления, а именно внешний вид окон, виджетов, а также курсор и иконки.

Я предпочитаю светлые темы, поэтому выбирал только среди таких. Курсор выбирал, чтобы контрастировал с остальным интерфейсом, соответственно был тёмным. Иконки же выбирал на основе популярности и просто чтобы понравилось.

Далее распишу подробнее про каждый элемент.

# Внешний вид окон и виджетов

Как следует из официальной вики, понадобилось отдельно настроить темы для GTK и Qt:

> Since this is not a fully-fledged Desktop Environment, you will need to use tools such as lxappearance and nwg-look (recommended) for GTK, and qt5ct / qt6ct for their respective Qt versions. Some older applications may also require qt4ct.

## GTK

Темы для GTK можно найти на [gnome-look.org](https://www.gnome-look.org/) в разделе "GTK3/4 Themes". Я остановился на теме [Fluent](https://github.com/vinceliuice/Fluent-gtk-theme). У неё есть большое количество стилей, включая светлый. Установить эту тему из AUR можно командой `yay -S fluent-gtk-theme`.

Для того, чтобы указать в Hyprland тему GTK, я использовал переменную окружения `GTK_THEME` со значением `Fluent-Light`. Для этого необходимо добавить в файл `~/.config/hypr/hyprland.conf` следующую строку:

```
env = GTK_THEME,Fluent-Light
```

В целом на этом настройка GTK закончена. Для применения изменений нужно перезапустить окружение.

## Qt

Для настройки темы Qt использовал переменную окружения `QT_QPA_PLATFORMTHEME`. Для этого добавил в файл `~/.config/hypr/hyprland.conf`:

```
env = QT_QPA_PLATFORMTHEME,gtk3
```

### Дополнительно

Следуя рекомендациям из [официальной документации Hyprland](https://wiki.hyprland.org/Configuring/Environment-variables/) также добавил переменные окружения для Qt:

```
env = QT_AUTO_SCREEN_SCALE_FACTOR,1
env = QT_QPA_PLATFORM,wayland;xcb
env = QT_WAYLAND_DISABLE_WINDOWDECORATION,1
```

# Курсор

Hyprland поддерживает свой формат курсоров, который называется [hyprcursor](https://wiki.hyprland.org/Hypr-Ecosystem/hyprcursor/). Этот формат несовместим с форматом курсоров X11, поэтому, чтобы получить одинаковый курсор во всех приложениях, необходимо найти тему курсоров в X11-формате и отдельно в hyprcursor-формате. В документации по hyprcursor написано, что темы для курсоров в Hyprland пользователи скидывают в Discord в канал `#hyprcursor-themes`. Изучив канал, остановился на [BreezeX_Cursor](https://github.com/ful1e5/BreezeX_Cursor).

Установить выбранную тему курсоров для X11 можно следующей командой `yay -S breezex-cursor-theme`.

Для hyprcursor скачать файл с темой курсоров BreezeX-Dark можно по [ссылке](https://discord.com/channels/961691461554950145/1216066899729977435/1255300607523422249) из Discord'а либо [с моего сайта](BreezeX-Dark-hyprcursor.zip). Распаковав архив в директорию `~/.local/share/icons`, получил установленную тему курсоров.

В файле `~/.config/hypr/hyprland.conf` добавил следующие переменные окружения:

```
env = HYPRCURSOR_SIZE,28
env = HYPRCURSOR_THEME,BreezeX-Dark-hyprcursor
env = XCURSOR_SIZE,28
env = XCURSOR_THEME,BreezeX-Dark
```

А также выполнил команду из документации:

```console
$ gsettings set org.gnome.desktop.interface cursor-theme 'BreezeX-Dark'
```

# Иконки

Наборы иконок так же, как и остальное, искал на [gnome-look.org](https://www.gnome-look.org/). Выбирал между, пожалуй, самой популярной темой [Papirus](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) и [Qogir](https://github.com/vinceliuice/Qogir-icon-theme). Остановился на второй, так как она мне понравилась больше. На мой взгляд, она больше подходит под выбранное оформление окон и виджетов.

Я использую EndeavourOS, поэтому иконки Qogir уже были установлены вместе с пакетом `endeavouros/eos-qogir-icons`. В Arch Linux же пакет называется `qogir-icon-theme`.

Указал иконки используя `dconf-editor` в разделе *org > gnome > desktop > interface > icon-theme*. Значение поставил `Qogir`. В [документации](https://wiki.archlinux.org/title/Uniform_look_for_Qt_and_GTK_applications#Using_a_GTK_icon_theme_in_Qt_applications) сказано, что установка через `dconf-editor` указывает иконки как для GTK, так и для Qt (так как QT_QPA_PLATFORMTHEME=gtk3).

# Шрифты

В качестве шрифта выбрал Noto Sans Regular. Указать его можно через `nwg-look`, про который написал ниже.

# nwg-look

[nwg-look](https://github.com/nwg-piotr/nwg-look) &mdash; это утилита для настройки GTK. С помощью неё можно задать внешний вид, цвета, курсор, шрифты, а также темы иконок. `nwg-look` при открытии подставляет свои сохранённые значения, а не берёт их из конфига GTK. Это означает, что при сохранении настроек в `nwg-look` они перетрут всё, что мы настраивали до этого вручную. Поэтому я задал дополнительно все те настройки, которые указывал до этого, также и в `nwg-look`:

```
Widget theme: Fluent-Light
Default font: Noto Sans Regular 11
Icon theme: Qogir
Mouse cursor: BreezeX-Dark
Cursor size: 28
```

# Заключение

В итоге я настроил тему оформления, курсор, иконки и шрифты. Всё это сделало интерфейс более приятным и удобным для меня. В целом этот пост можно рассматривать как инструкцию для настройки своего внешнего вида. Следуя по шагам из статьи можно получить красивое окружение. Возможно в будущем я что-то поменяю, поэтому даю ссылку на свои конфиги в [репозитории](https://github.com/ismd/dotfiles).

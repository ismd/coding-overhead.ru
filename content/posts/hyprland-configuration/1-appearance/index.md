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

### FIXME Kvantum

Для настройки темы Qt использовал переменную окружения ~QT_STYLE_OVERRIDE~. Для этого добавим в файл `~/.profile` следующую строку:

```
export QT_STYLE_OVERRIDE=gtk
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

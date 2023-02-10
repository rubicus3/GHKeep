# GHKeep Frontend

## Запуск

Для запуска приложение в dev-режиме необходимо склонировать проект, установить необходимые пакеты для react-native и запустить его. Также надо будет указать айпи локального сервера в Api.js в константу dblink.

    npm install
    npx expo start
  
На телефон необходимо установить программу [Expo Go](https://expo.dev/client).
Сканировав QR Выданный expo, проект откроется на телефоне.

Для запуска локального сервера склонируйте проект [GHKeep-api](https://github.com/rubicus3/GHKeep-api).
Сделайте дамп в локальную базу данных mariadb 'case_8' из файла.

    mysql -u root -p case_8 < mariadb-dump.sql

Укажите пароль от root mariadb в файле db.py в переменную password.

    nano db.py
    
Установите необходимые пакеты для python и запустите api.py.

    pip install -r requirements
    python3 api.py

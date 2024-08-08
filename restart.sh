#!/bin/bash

# Обновление репозитория
echo "Pulling latest changes from git repository..."
git pull

# Сборка проекта
echo "Building the project..."
npm run build

# Запуск приложения в фоновом режиме
echo "Starting the application..."
nohup npm run start > app.log 2>&1 &

# Вывод PID запущенного процесса
echo "Application started with PID $!"
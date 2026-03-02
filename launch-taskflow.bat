@echo off
start "TaskFlow Server" npm start
timeout /t 2 /nobreak >nul
start "" http://localhost:8080/taskflow-ai.html
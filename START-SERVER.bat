@echo off
echo Farmer Group - Server start kar rahe hain...
echo.
cd /d "%~dp0server"
if not exist "node_modules" (
    echo Pehli bar: npm install kar rahe hain...
    call npm install
)
echo.
echo Server start ho raha hai. Browser mein ye kholen:  http://localhost:3000
echo Footer mein Facebook/Instagram followers yahi se load honge.
echo Band karne ke liye Ctrl+C dabayein.
echo.
node index.js

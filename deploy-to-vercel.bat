@echo off
title Deploy Harshit Saxena Portfolio to Vercel
color 0b
echo ===================================================================
echo     HARSHIT SAXENA - ANDROID DEVELOPER PORTFOLIO DEPLOYMENT
echo ===================================================================
echo.
cd /d "D:\harshit-portfolio-3d"

echo [Step 1] Verifying build...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Build failed! Please review the error above.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [Step 2] Launching Vercel deployment...
echo (If this is your first time, your browser will open to login to Vercel.)
echo.
call npx vercel --prod

echo.
echo ===================================================================
echo   Deployment finished! Your portfolio is now LIVE on Vercel!
echo ===================================================================
echo.
pause

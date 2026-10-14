@echo off
echo =========================================================
echo    Harshit Saxena 3D Portfolio - Vercel Deployment Helper
echo =========================================================
echo.
cd /d "D:\harshit-portfolio-3d"

echo [1/3] Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies via npm...
    call npm install
)

echo.
echo [2/3] Building local test build to verify no errors...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Build failed! Please review the messages above.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/3] Ready to deploy to Vercel!
echo Running 'npx vercel'...
call npx vercel

echo.
echo Done! For production deployment, run: npx vercel --prod
pause

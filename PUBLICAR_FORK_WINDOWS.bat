@echo off
setlocal
chcp 65001 >nul
echo WMK Silent Depths - Publicar codigo completo no GitHub
where git >nul 2>nul || (echo ERRO: Git para Windows nao instalado. & pause & exit /b 1)
if not exist "%~dp0almirante.js" (echo ERRO: execute este arquivo dentro da pasta extraida do ZIP v0.4.10. & pause & exit /b 1)
set "DEST=%~dp0_Repositorio-GitHub"
if not exist "%DEST%\.git" (
  git clone https://github.com/WalneyNF/WMK-Silent-Depths.git "%DEST%" || (echo FALHA NO CLONE. & pause & exit /b 1)
)
cd /d "%DEST%"
git pull --ff-only origin main || (echo FALHA NO PULL. & pause & exit /b 1)
robocopy "%~dp0" "%DEST%" /E /XD "_Repositorio-GitHub" ".git" /XF "PUBLICAR_FORK_WINDOWS.bat" /NFL /NDL /NJH /NJS /NC /NS >nul
if %ERRORLEVEL% GEQ 8 (echo FALHA AO COPIAR. & pause & exit /b 1)
git add -A
git diff --cached --quiet
if not errorlevel 1 (echo O repositorio ja esta atualizado. & pause & exit /b 0)
git commit -m "feat: WMK Silent Depths v0.4.10 minimapa movel" || (echo FALHA NO COMMIT; confira nome/email do Git. & pause & exit /b 1)
git push origin main || (echo FALHA NO PUSH; faca login no GitHub. & pause & exit /b 1)
echo PUBLICACAO CONCLUIDA: https://github.com/WalneyNF/WMK-Silent-Depths
pause

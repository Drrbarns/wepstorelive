# Quick Git Push Script for Cursor
# Usage: .\git-push.ps1 "Your commit message"

param(
    [string]$Message = "Update: WepStore changes"
)

$repoUrl = "https://github.com/Drrbarns/wepstore.git"

Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Find Git
$gitExe = $null
$gitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe"
)

foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        $gitExe = $path
        break
    }
}

if (-not $gitExe) {
    # Try from PATH
    try {
        $null = Get-Command git -ErrorAction Stop
        $gitExe = "git"
    } catch {
        Write-Host "❌ Git not found. Please install Git or add it to PATH." -ForegroundColor Red
        Write-Host "Download: https://git-scm.com/download/win" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "✓ Using Git: $gitExe" -ForegroundColor Green
Write-Host ""

# Check if repo is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing repository..." -ForegroundColor Yellow
    & $gitExe init
    & $gitExe branch -M main
}

# Check remote
$remote = & $gitExe remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    & $gitExe remote add origin $repoUrl
} else {
    Write-Host "✓ Remote: $remote" -ForegroundColor Green
}

# Stage all changes
Write-Host "Staging changes..." -ForegroundColor Yellow
& $gitExe add .

# Check for changes
$status = & $gitExe status --porcelain
if ($status) {
    Write-Host "Committing: $Message" -ForegroundColor Yellow
    & $gitExe commit -m $Message
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Committed successfully" -ForegroundColor Green
        
        # Push to GitHub
        Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
        & $gitExe push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "✅ Successfully pushed to GitHub! 🎉" -ForegroundColor Green
            Write-Host "View: https://github.com/Drrbarns/wepstore" -ForegroundColor Cyan
        } else {
            Write-Host "❌ Push failed. Check your credentials or connection." -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Commit failed." -ForegroundColor Red
    }
} else {
    Write-Host "ℹ No changes to commit." -ForegroundColor Yellow
}



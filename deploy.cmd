@echo off

IF "node.js" == "nodejs" (
  deploy.node.cmd
) ELSE (
  IF "nodejs" == "mvc4" (
    deploy.mvc4.cmd
  ) ELSE (
    echo You have to set SITE_FLAVOR setting to either "nodejs" or "mvc4"
    exit /b 1
  )
)

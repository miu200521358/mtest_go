# README

## 新規作成

```
(mtool) C:\MMD\mtest_go>wails init -n mtest_go -t vue-ts -ide vscode
Wails CLI v2.7.1


# Initialising Project 'mtest_go'
Project Name      | mtest_go
Project Directory | C:\MMD\mtest_go\mtest_go
Template          | Vue + Vite (Typescript)
Template Source   | https://wails.io

Initialised project 'mtest_go' in 309ms.

 ?   If Wails is useful to you or your company, please consider sponsoring the project:
https://github.com/sponsors/leaanthony
```

```
C:\MMD\mtest_go>go get github.com/miu200521358/mlib_go
```

```
C:\MMD\mtest_go\frontend>

npm install create-vite
npm install --save quasar @quasar/extras
npm install --save-dev @quasar/vite-plugin sass@^1.33.0
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install -D @vue/tsconfig
npm install vue-i18n@9
npm install pinia
```

```
C:\MMD\mtest_go\frontend>npm install git+https://github.com/miu200521358/mlib_vue.git
```

```
C:\MMD\mtest_go\frontend>

node_modulesを削除する
package-lock.jsonを削除する

npm cache clear --force
npm install
```


```
wails dev -assetdir ./frontend/dist -wailsjsdir ./frontend/src -reloaddirs ./frontend/src/views,./frontend/src/i18n/locales -save
```

## About

This is the official Wails Vue-TS template.

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: https://wails.io/docs/reference/project-config

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.

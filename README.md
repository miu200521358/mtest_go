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
npm install --save-dev @quasar/vite-plugin sass
npm install -D tailwindcss postcss autoprefixer
npm install -D @vue/tsconfig
npm install vue-i18n
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

## やり直し

```
(mtool) C:\MMD\mtest_go>npm init vue@latest

Vue.js - The Progressive JavaScript Framework

√ Project name: ... frontend
√ Add TypeScript? ... Yes
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... No
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... Yes
√ Add Prettier for code formatting? ... Yes

Scaffolding project in C:\MMD\mtest_go\frontend...

Done. Now run:

  cd frontend
  npm install
  npm run format
  npm run dev
```

```
npm install --save quasar @quasar/extras
npm install --save-dev @quasar/vite-plugin sass
npm install --save-dev @types/webpack
npm install -D tailwindcss postcss autoprefixer
npm install -D @vue/tsconfig
npm install vue-i18n
```

```
(mtool) C:\MMD\mtest_go\frontend\src\components>mklink /D molecules C:\MMD\mlib_vue\src\components\molecules
molecules <<===>> C:\MMD\mlib_vue\src\components\molecules のシンボリック リンクが作成されました
```

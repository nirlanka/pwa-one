# PwaOne

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

Generated with:

```
ng new pwa-one --enableIvy=true --inlineStyle=true --inlineTemplate=true --skipTests=tr
ue --prefix=one --routing=true --skipInstall=true --style=sass
```

PWA setup:

```
ng add @angular/pwa --project pwa-one
```

Install static server:

```
npm -g install static-server
```

Build app:

```
ng build --prod
```

Run server:

```
cd dist\pwa-one
static-server
```

## Hosting PWA (temporarily)

Use https://surge.sh for quick hosting with HTTPS.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

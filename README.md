<h1 align="center"> 
Pet Health Care
</h1>
<h2 align="center">
  <img alt="logo" src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" />
</h2>

---

<h4 align="center">
  <a href="#information_source-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#seedling-minimal-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beginner-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#beginner-getting-started">Project</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</h4>

## :information_source: About
An Angular web app with mobile friendly user interface to store, view, share and manage health information about pets.


## :rocket: Technologies

The project was developed using the following technologies:

- [JavaScript](https://www.javascript.com/)
- [TypeScript](https://www.typescriptlang.org/) 
- [Node.js](https://nodejs.org/)
- [Angular](https://angular.io/)
- [Jest](https://jestjs.io/)
- [Fire Base](https://www.mongodb.com/)
- [ESLint](https://eslint.org/)

## :seedling: Minimal Requirements

- [Node v10+](https://nodejs.org/en/docs/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/).
- [Docker](https://www.docker.com/)

## :beginner: Getting Started

<b>Cloning the repository:</b>

- `$ git clone https://github.com/SmartOffice-Legends/pet-health-care`

### :link: Regular Installation

<b>Download the dependences:</b>
-`cd pet-health-cared`
- `npm install`
- `npm start && npm test`

:warning: For more clear results, you need to [Angular CLI](https://angular.io/)

If you are trouble with your node enviroment, We suggest [Node Version Manager](https://github.com/nvm-sh/nvm)


## :paperclip: Project

### :open_file_folder: Folder Structure

    ├── app/
    │   ├── core/
    │   │   ├── guards
    │   │   ├── interceptors
    │   │   └── services
    │   ├── pages/
    │   │   ├── user/
    │   │   │   ├── user-login
    │   │   │   ├── user-sign-up
    │   │   │   ├── user-reset-password
    │   │   │   └── user.module.ts
    │   │   ├── home
    │   │   ├── error
    │   │   ├── template/
    │   │   │   ├── footer
    │   │   │   └── header
    │   │   ├── common-layout-routing.module.ts
    │   │   ├── common-layout.component.html
    │   │   ├── common-layout.component.scss
    │   │   ├── common-layout.component.ts
    │   │   └── common-layout.module.ts
    │   ├── shared/
    │   │   ├── components
    │   │   ├── directives
    │   │   └── pipes
    │   ├── app-routing.module.ts
    │   ├── app.component.css
    │   ├── app.component.html
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   └── app.module.ts
    ├── assets
    ├── environments/
    │   ├── environment.ts
    │   ├── environment.prod.ts
    │   └── firbase-config/
    │       ├── database.rules.json
    │       ├── firestore.indexes.json
    │       └── firestore.rules
    └── styles/
        └── styles.css (concatenated target stylesheet file)

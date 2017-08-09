# Chrome Extension Boilerplate

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Documentation](#documentation)

## About
The Chrome Extension Boilerplate provides a starting point for Chrome extension development.

## Installation
The Chrome Extension Boilerplate repository may be cloned from the following URL:

[https://github.com/jrmykolyn/chrome-extension-boilerplate](https://github.com/jrmykolyn/chrome-extension-boilerplate)

## Setup
- Fork the project repository.
- Clone the fork to your local machine.
- Navigate to repository folder and run `npm install`.
- Open the repository in your IDE of choice.
- Inspect the `src/` directory.
- ?
- Profit.

## Usage
Your extension's source files should live in the `src/` directory. Any HTML, JS, and CSS/SCSS files, as well as images and other static assets, *must* be present in this directory. Please note that although the `src/` directory includes the `scripts/` and `styles/` subfolders, CSS and JS files are compiled/migrated to `dist/css` and `dist/js` respectively. This means that any stylesheets/script references must include either `css/` or `js/`, even when working within the `src/` directory.

When you're ready to test or deploy your extension, run the `build` script (`npm run build`). This results in the following:
- static files and assets are migrated from `src/` to `dist/`.
- `styles.scss` file (and any imported SCSS partials) are compiled to `dist/css/styles.css`.

## Documentation
Currently, Chrome Extension Boilerplate does not include any external documentation.

For an overview of the project's evolution, please consult the CHANGELOG.

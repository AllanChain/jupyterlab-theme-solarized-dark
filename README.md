# jupyterlab-theme-solarized-dark

[![NPM](https://nodei.co/npm/jupyterlab-theme-solarized-dark.png)](https://npmjs.org/package/jupyterlab-theme-solarized-dark)

JupyterLab 2.x Solarized Dark extension.

The theme is originally created by [Jae Hee Lee](http://jaeheelee.info/) [here](https://gist.github.com/dschaehi/ff6d30e6779a683053a1f078af178cdb)

## Screenshot

![Screenshot](https://user-images.githubusercontent.com/36528777/79721723-6927f680-8315-11ea-8a5b-e2c298eeed09.png)

## Prerequisites

* JupyterLab

## Version

Version `0.2.x` is mainly based on Jae Hee Lee's original theme. And Version `1.x` aims to provide a smoother looking.

## Installation

```bash
jupyter labextension install jupyterlab-theme-solarized-dark
```

Apply theme by checking `Settings -> Jupyterlab Theme -> Jupyterlab Solarized Dark`

To enable theme scrollbars, in JupyterLab, either

- navigate to `Settings -> Advanced Settings Editor -> Theme`, and add `"theme-scrollbars": true` to `User Preferences`
- OR check `Settings -> Jupyterlab Theme -> Theme Scrollbars`

## Customization

Although Jupyterlab provides a setting for user to override css, there are only 3 css variables available.

Some hack is required to provide a `local.css`. And I don't think such hack is what a theme should do.

You can directly edit `<share>/jupyter/lab/themes/jupyterlab-theme-solarized-dark/index.css` to modify the theme locally. `<share>` directory locates differently depending on the OS. Note that all the change will be lost when upgrading the theme.

Or fork the repo and install your own theme.

And, feel free to create issues and PRs!

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

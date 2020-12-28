import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ITranslator } from '@jupyterlab/translation';

/**
 * A plugin for jupyterlab-theme-solarized-dark
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-solarized-dark:plugin',
  requires: [IThemeManager, ITranslator],
  activate: function(
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator
  ) {
    const style = 'jupyterlab-theme-solarized-dark/index.css';
    const trans = translator.load('jupyterlab');

    manager.register({
      name: 'JupyterLab Solarized Dark',
      displayName: trans.__('JupyterLab Light'),
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;

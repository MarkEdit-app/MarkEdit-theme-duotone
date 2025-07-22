import { overrideThemes } from 'markedit-theming';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';

overrideThemes({
  light: {
    extension: duotoneLight,
    colors: {
      subtleEmphasis: true,
    },
  },
  dark: {
    extension: duotoneDark,
    colors: {
      subtleEmphasis: true,
    },
  },
  options: {
    settingsKey: 'extension.markeditThemeDuoTone',
  },
});

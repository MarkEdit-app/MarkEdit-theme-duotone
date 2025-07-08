import { overrideThemes } from 'markedit-theming';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';

overrideThemes({
  light: { extension: duotoneLight },
  dark: { extension: duotoneDark },
});

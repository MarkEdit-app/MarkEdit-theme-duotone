import { overrideThemes } from 'markedit-theming';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { previewStyles } from './preview';

overrideThemes({
  light: { extension: duotoneLight },
  dark: { extension: duotoneDark },
  options: { settingsKey: 'extension.markeditThemeDuoTone' },
});

// Keep the MarkEdit-preview pane consistent with the editor theme.
const style = document.createElement('style');
style.textContent = previewStyles;
document.head.appendChild(style);

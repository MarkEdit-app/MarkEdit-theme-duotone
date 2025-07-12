import { CustomTheme, overrideThemes } from 'markedit-theming';
import { MarkEdit, type JSONObject, type JSONValue } from 'markedit-api';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';

const toObject = (value: JSONValue, fallback = {}) => (value ?? fallback) as JSONObject;
const rootValue = toObject(toObject(MarkEdit.userSettings)['extension.markeditThemeDuoTone']);
const enabledMode = (rootValue.enabledMode ?? 'both') as string;

const lightTheme: CustomTheme = { extension: duotoneLight };
const darkTheme: CustomTheme = { extension: duotoneDark };

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? lightTheme : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? darkTheme : undefined,
});

# MarkEdit-theme-duotone

[DuoTone](https://simurai.com/projects/2016/01/01/duotone-themes) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="DuoTone Light" src="https://github.com/user-attachments/assets/23fadf2a-701a-4b78-81c4-c182ecb231d5" /> <img width="344" title="DuoTone Dark" src="https://github.com/user-attachments/assets/b6a70da8-f8b7-4e96-801a-aecbfb82724b" />

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

## Installation

Copy [dist/markedit-theme-duotone.js](dist/markedit-theme-duotone.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeDuoTone` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeDuoTone": {
    "enabledMode": "both"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).

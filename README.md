# ngx-material-colorpicker

Color picker component (based on angular material 7+)

## Usage

```
npm install --save @promact/ngx-material-colorpicker
```

### Import
```
import { ColorpickerModule } from 'ngx-material-colorpicker';

// In your App's module:
imports: [
   ColorpickerModule
]
```

### Add in your HTML

```
<ngx-material-colorpicker [(ngModel)]="color"></ngx-material-colorpicker>
```

## API

### Properties

| Name | Type | Description |
| --- | --- | --- |
| `disabled` | `boolean` | Whether or not the colorpicker is disabled |
| `format` | `string` | 	Color format:'hex', 'rgb', 'hsl'.Default :hex |
| `id` | `number` | The unique ID of this colorpicker. |
| `tabindex` | `number` | The tabIndex of the colorpicker. |

### Events

| Name | Type | Description |
| --- | --- | --- |
| `change` | `Event` | Fired when color is changed |

### Examples
A colorpicker would have the following markup.
```html
<ngx-material-colorpicker [(ngModel)]="color"></ngx-material-colorpicker>
```
```html
<ngx-material-colorpicker [(ngModel)]="color" format="hsla"></ngx-material-colorpicker>
```
```html
<ngx-material-colorpicker [(ngModel)]="color" [disabled]="true"></ngx-material-colorpicker>
```

## Developing

### Change code in projects/ngx-material-colorpicker/src folder

### Build library

```
npm run build:lib
```

### Run demo

```
ng serve
```
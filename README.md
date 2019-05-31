# object-key-path-transformer

## DESCRIPTION

Transforms object keys to be strings correspending to their path.
The operation is completely immutable even for nested objects.

Meant to be used with `i18n-js` and `typescript` as a way to provide type-safing and autocompletion.

## EXAMPLE USAGE WITH i18N-JS

```typescript
import i18n from 'i18n-js'
import transformKeys from 'object-key-path-transformer'

const en = {
  buttons: {
    next: 'Next'
  }
}

export const lang = transformKeys(en)

i18n.translations = { en }

i18n.t(lang.buttons.next) // value: "buttons.next"
```

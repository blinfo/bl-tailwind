# Tailwind CSS styling för Björn Lundén AB

## Installera

```bash
    npm install @blinfo/bl-tailwind 
```

_Note: Tailwind CSS version 2 behövs installeras i det lokala projektet_

**Steg 1**

Skapa tailwind.config.js i roten på projetet och koperia in följande i filen:

```javascript
module.exports = {
  presets: [
    require('@blinfo/bl-tailwind/tailwind.config')
  ]
}
```

**Steg 2**

För att stylingen ska komma med så kan du välja ett av två sätt:

Alt. 1:  
Använd CSS filen som följer med i det här paketet _(node_modules/@blinfo/bl-tailwind/tailwind-build.css)_ i tex angular.json för att bygga med stylingen i ditt eget paket.

Alt. 2:  
Importera föjande i din huvud CSS fil.
  ```css
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  ```


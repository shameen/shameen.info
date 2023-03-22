# shameen.info

Personal website built using [Durandal](https://www.npmjs.com/package/durandal) (an SPA framework based on KnockoutJS)

# Dev Setup / Build

```sh
npm i
npm run build
```

### With Windows downgrade/upgrade

(using nvm-windows and admin `cmd`)

1. downgrade

   ```sh
   ./updateNpm.bat 6.14.12
   nvm use 10
   ```

2. run

   ```sh
   npm i
   npm run build
   ```

3. upgrade
   ```sh
   ./updateNpm.bat 8.19.3
   nvm use 16
   ```

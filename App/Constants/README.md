### Constants Folder

- This folder contains Application specific Constants.
  - `Alerts.js`: It contains the all alerts text that should be hard coded.Any alert which are used in two or more files must be kept inside this file.
  - `Titles.js`: It contains the all titles text that should be hard coded like button's title
  - `index.js`: All the above files are exported using this file. It will reduce the import code for each file and wrap into one package. Eg. Alerts can be imported by `import { alerts } from 'Constants'`.

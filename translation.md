### Italian translation

creating a mirror of <https://github.com/pietroppeter/wordle-it>

- [x] In [.env](.env):
  - [x] Update the title and the description
  - [x] Add plausible domain
- [ ] In [public/index.html](public/index.html):
  - [ ] Update the "You need to enable JavaScript" message
  - [ ] Update the language attribute in the HTML tag
- [ ] Update the name and short name in [public/manifest.json](public/manifest.json)
- [ ] Update the strings in [src/constants/strings.ts](src/constants/strings.ts)
- [x] Add all of the five letter words in the language to [src/constants/validGuesses.ts](src/constants/validGuesses.ts), replacing the English words
- [x] Add a list of goal words in the language to [src/constants/wordlist.ts](src/constants/wordlist.ts), replacing the English words
- [ ] Update the "Settings" modal in [src/components/modals/SettingsModal.tsx](src/components/modals/SettingsModal.tsx)
- [ ] Update the "Info" modal in [src/components/modals/InfoModal.tsx](src/components/modals/InfoModal.tsx)

additional actions:
- [x] change Date value for `epochMs` in [src/lib/words.ts](src/lib/words.ts)
- [ ] build and deploy in docs folder (with github pages)
  - [x] `npm run build`
  - [x] manually copy only the need files
  - [x] activate github pages
  - [x] had to manually make sure path for css and js is relative as in `static/...` and not `/static/...` to make it work
  - [ ] some script to automate copying and renaming of files
  - [ ] is it possible to avoid the need to use relative path?
    should I use a PUBLIC_URL?

### Italian translation

creating a mirror of <https://github.com/alongo13/react-wordle>

- [x] In [.env](.env):
  - [x] Update the title and the description
  - [x] Add plausible domain
- [x] In [public/index.html](public/index.html):
  - [x] Update the "You need to enable JavaScript" message
  - [x] Update the language attribute in the HTML tag
- [x] Update the name and short name in [public/manifest.json](public/manifest.json)
- [x] Update the strings in [src/constants/strings.ts](src/constants/strings.ts)
- [x] Add all of the five letter words in the language to [src/constants/validGuesses.ts](src/constants/validGuesses.ts), replacing the English words
- [x] Add a list of goal words in the language to [src/constants/wordlist.ts](src/constants/wordlist.ts), replacing the English words
- [x] Update the "Settings" modal in [src/components/modals/SettingsModal.tsx](src/components/modals/SettingsModal.tsx)
- [x] Update the "Info" modal in [src/components/modals/InfoModal.tsx](src/components/modals/InfoModal.tsx)

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
  - [x] update again after completing translation
  - [ ] I should pass to vercel or netlify
- [x] use images and manifest.json from [alongo13/react-wordle](https://github.com/alongo13/react-wordle)
- [x] add also open graph fields in index.html (FB meta tags)
- [x] use favicon from wordle
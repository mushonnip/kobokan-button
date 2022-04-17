# Kobokan Button

Sebuah Website Tombol Suara didedikasikan untuk VTuber Gen-3 Hololive Indonesia, Kobo Kanaeru.

- [Kobo Kanaeru's Youtube channel](https://www.youtube.com/channel/UCjLEmnpCNeisMxy134KPwWw)

- [Kobo Kanaeru's Twitter](https://twitter.com/kobokanaeru)

## Note

**This project is still so early. We are welcome for your contribution.**

## Contributing

Ingin berkontribusi? lihat panduannya [di sini](https://github.com/mushonnip/kobokan-button/blob/main/CONTRIBUTING.md)

## Development environment

```bash
# install package dependencies
$ npm install
# generate the voice list (local development only)
$ npm run generate:voice-list
# run development server
$ npm run dev
```

Agar daftar voice bisa ditampilkan oleh website, diperlukan men-_generate_ voice list dari `YAML` menjadi satu file dengan format `JSON`. Caranya dengan menjalankan perintah `npm run generate:voice-list`. Perintah ini diperlukan setiap kita mengubah file YAML.

Perintah `npm run dev` digunakan untuk menjalankan web server dalam mode development yang berjalan pada `localhost:3000`.

## LICENSE

[![LICENSE](https://img.shields.io/github/license/mushonnip/kobokan-button)](LICENSE)

Program: MIT

Audio: According to the [Hololive secondary creation licence](https://en.hololive.tv/terms).

This project is a work of fans and is not related to the official Hololive.

## Thanks and Credits

This project are inspired by [luna-button](https://github.com/monoai/luna-button) and related/similar projects.

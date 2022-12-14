<p align="center">
  <a href="https://github.com/edrickleong/smartbank">
    <img src="docs/images/smartbank-logo.svg" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">SmartBank</h3>

<p align="center">
    A demo banking app made with React Native and Supabase. 
    <br />
    Designed by <a href="https://twitter.com/uiuxadrian">Adrian Kuleszo</a>
    <br />
    Demo app created by <a href="https://twitter.com/edrickleong_">Edrick Leong</a>
    <br />
    <br />
    <a href="https://github.com/edrickleong/smartbank/issues">Report Bug</a>
    ยท
    <a href="https://github.com/edrickleong/smartbank/issues">Request Feature</a>
</p>

![Mockup](docs/images/mockup.png)

This project uses designs from Adrian Kuleszo's
book [The UI Professional's Design Manual](https://uiadrian.gumroad.com/l/design-manual). Support him by purchasing a
copy of his book on [Gumroad](https://uiadrian.gumroad.com/l/design-manual).

## Demo
<p align="center">
  <img src="docs/demo.gif" alt="demo" width="360" />
</p>

## ๐ฑ Flows

These are groups of screens based on the design manual above.
Some of these screens have been created without adding functionality yet. For example,
the phone verifications screens have been created but do not integrate with a phone verification service.

- [x] Walkthrough
- [x] Login
- [x] Account setup
- [x] Phone verification
- [x] Create passcode
- [ ] Legal information
- [ ] Notifications
- [ ] Verify Identity
- [ ] Selfie
- [ ] Create a card
- [ ] Top up account
- [ ] Home screen
- [ ] Transfer money
- [ ] Exchange money
- [ ] Profile settings
- [ ] Upload avatar

## โจ Features

- [x] ๐ Sign Up / Log In
- [ ] ๐ Phone Verification
- [ ] ๐ Setup PIN + Face ID
- [ ] ๐ท Photo Verification
- [ ] ๐ Request for Notifications
- [ ] ๐ค Upload Avatar

## ๐ง Built with
- [Expo](https://expo.dev/) - A framework for building React Native apps
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Supabase](https://supabase.com/) - Auth & Database platform

## ๐ Local Development

1. Clone the repo

```sh
git clone https://github.com/edrickleong/smartbank
```

2. Install NPM packages

```sh
yarn install
```

3. Copy the `.env.example` file as a `.env` file and add the missing environment variables.
You will need to sign up for a [Supabase account](https://supabase.com/) and create a project.

4. Run the development server

```
yarn start
```

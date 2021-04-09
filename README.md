# フクロウラボ合宿 2021春 Reactで何か作るよ!

## WSL2でビルドするよ！

### 必要なアプリをインストールしたよ

- windows terminal (From microsoft store)
- ubuntu (From microsoft store)

### nodeをインストールしたよ

```
git clone https://github.com/anyenv/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
anyenv install
anyenv install nodenv
nodenv install 14.16.1
nodenv rehash
```

### expoアプリをスキャッフオルドする

```
npm install -g yarn
npm install -g expo-cli
expo init training_camp_20210409
cd training_camp_20210409
```

### 実行する

```
yarn web
```



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

## とにかく素振りするよ！

### Ionicons を使うよ！

https://oblador.github.io/react-native-vector-icons/



# トラブル編

## mac / ipad / 保険証を忘れた

- 出掛けに充電を仕掛けたまま忘れた
- 保険証については直前にカバンを交換した為

## トスラブのネットワークはトンネル出来ない

トンネルが出来ない場合の解決は、ホストでプロキシー設定等が必要

![スクリーンショット 2021-04-09 150151](https://user-images.githubusercontent.com/2138783/114135791-b8ab6c00-9944-11eb-9d7b-ada33c5677ff.png)

https://forums.expo.io/t/expo-with-wsl2-over-lan/38817/3


#### WSL2は、直接ネットワークからアクセス出来ない

```
[実機] <=={LAN}==> [Windows [WSL2(ubuntu)] ]
```

# まとめ

- やっぱりMacは便利、高速道路に乗っている感はある
  - 反面Winの反撃は近そう、10万ちょいのPCでも俊敏に動く。WSL2快適。両方使ってもいいかも！






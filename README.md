# 🎨 ArtGallery

## アプリケーション概要
クリエイターが作品を投稿してWeb上で気軽に展覧会を開催できるアプリケーションです。<br>
投稿された作品はVR空間に展示され、オンラインでありながら臨場感のある展示を楽しむことができます。<br><br>

![demo](https://user-images.githubusercontent.com/13264818/112143126-cd84c180-8c1a-11eb-9ebd-f23d679b3f8a.gif)<br><br>

# 🌐 App URL
### **https://art-gallery-space.herokuapp.com/**

<br>

# 💻 利用方法

### 👤 テスト用アカウント
name: Test<br>
email: test@sample<br>
password: testpass<br><br>

上部メニューバーからログイン、または新規ユーザー登録 → トップページに遷移

#### ⭐️ 新規ギャラリー作成
上部メニューバーから「New gallery」を選択 → ギャラリーの概要を入力 → マイページに遷移
<br>

[![Image from Gyazo](https://i.gyazo.com/91827cdd89d0b5c066b818a6c4cd1af1.jpg)](https://gyazo.com/91827cdd89d0b5c066b818a6c4cd1af1)

[![Image from Gyazo](https://i.gyazo.com/44fc0bb098c5070aeb94e4694bf489da.jpg)](https://gyazo.com/44fc0bb098c5070aeb94e4694bf489da)

[![Image from Gyazo](https://i.gyazo.com/63b46f1e79d087dc7d651bef56086705.png)](https://gyazo.com/63b46f1e79d087dc7d651bef56086705)

#### ⭐️ ギャラリー編集
マイページまたはトップページから自身が投稿したギャラリーを選択 → ギャラリー詳細ページから「Edit」を選択 → ギャラリー編集ページから「Edit room」を選択 → 「Add new artworks」から展示する作品を登録
<br>

[![Image from Gyazo](https://i.gyazo.com/2ca60d79884a7e7880a8f426d2648546.jpg)](https://gyazo.com/2ca60d79884a7e7880a8f426d2648546)

[![Image from Gyazo](https://i.gyazo.com/62f3d683ccafcadc943ff57ffba8f744.png)](https://gyazo.com/62f3d683ccafcadc943ff57ffba8f744)

[![Image from Gyazo](https://i.gyazo.com/0bf67cf256daf4b243c84aec37e8fdc5.png)](https://gyazo.com/0bf67cf256daf4b243c84aec37e8fdc5)

#### ⭐️ 画像の位置・サイズのカスタマイズ
「Room preview」で画像をドラッグすることで表示位置を調整、画像右上の四角いマークをドラッグすることでサイズを調整 → プレビュー左上の「done」ボタンを押下して変更を保存

[![Image from Gyazo](https://i.gyazo.com/6be02c2c2b8fe86809856c33db58779c.gif)](https://gyazo.com/6be02c2c2b8fe86809856c33db58779c)

#### ⭐️ ギャラリーの閲覧
ギャラリー詳細ページから「Enter」を選択

[![Image from Gyazo](https://i.gyazo.com/2ca60d79884a7e7880a8f426d2648546.jpg)](https://gyazo.com/2ca60d79884a7e7880a8f426d2648546)

![demo](https://user-images.githubusercontent.com/13264818/112143126-cd84c180-8c1a-11eb-9ebd-f23d679b3f8a.gif)<br><br>


# 目指した課題解決
- クリエイターが自由なスタイルで作品を発表できる場を提供する
- 新型コロナウイルスの流行で外出制限がある中、自宅にいながらアートを楽しむ方法を提案する

<br>

# 要件一覧
- ユーザー登録機能
- ギャラリー作成機能
- 作品投稿機能
- 位置・サイズ編集機能
- 3D表示機能
- プロフィール編集機能
- Twitter投稿機能

<br>

# 実装予定の機能
- 展示室からの画面遷移
- お気に入り登録機能
- コメント投稿機能
- 作品の販売・購入機能

<br>

# テーブル設計

## users テーブル

| Column   | Type   | Options                   |
| -------- | ------ | ------------------------- |
| name     | string | null: false               |
| email    | string | null: false, unique: true |
| password | string | null: false               |
| profile  | text   |                           |

### Association

- has_many :galleries

## galleries テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| title       | string     | null: false                    |
| description | text       | null: false                    |
| user        | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :rooms

## rooms テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| gallery     | references | null: false, foreign_key: true |

### Association

- belongs_to :gallery
- has_many :artworks

## artworks テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| caption     | text       | null: false                    |
| vertical    | integer    |                                |
| horizontal  | integer    |                                |
| size        | integer    |                                |
| room        | references | null: false, foreign_key: true |

- belongs_to :room

<br>

# ローカルでの動作方法

#### 動作環境
Ruby 2.6.5<br>
Ruby on Rails 6.0.0<br>
mysql2 0.4.4<br><br>

以下のコマンドを実行<br><br>
$ git clone https://github.com/maiche/art-gallery.git<br>
$ cd art-gallery<br>
$ bundle install<br>
$ yarn install<br>
$ rails db:create<br>
$ rails db:migrate<br>
$ rails s<br><br>

http://localhost:3000 にアクセス
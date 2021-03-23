# 🎨 ArtGallery

## アプリケーション概要
クリエイターが作品を投稿してWeb上で気軽に展覧会を開催できるアプリケーションです。<br>
投稿された作品はVR空間に展示され、オンラインでありながら臨場感のある展示を楽しむことができます。

[![Image from Gyazo](https://i.gyazo.com/6fca38d1fa092b5e49ede0d46a4886fa.gif)](https://gyazo.com/6fca38d1fa092b5e49ede0d46a4886fa)

# 🌐 App URL
### **https://art-gallery-space.herokuapp.com/**

# 💻 利用方法

### 👤 テスト用アカウント
name: Test<br>
email: test@sample<br>
password: testpass

#### ⭐️ 上部メニューバーからログイン、または新規ユーザー登録 → トップページに遷移
<br>

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

[![Image from Gyazo](https://i.gyazo.com/6fca38d1fa092b5e49ede0d46a4886fa.gif)](https://gyazo.com/6fca38d1fa092b5e49ede0d46a4886fa)

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

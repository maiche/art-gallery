# テーブル設計

## users テーブル

| Column   | Type   | Options                   |
| -------- | ------ | ------------------------- |
| name     | string | null: false               |
| email    | string | null: false, unique: true |
| password | string | null: false               |

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
| vertical    | integer    | null: false                    |
| horizontal  | integer    | null: false                    |
| room        | references | null: false, foreign_key: true |

- belongs_to :room

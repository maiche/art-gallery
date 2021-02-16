# テーブル設計

## users テーブル

| Column     | Type   | Options                   |
| ---------- | ------ | ------------------------- |
| name       | string | null: false               |
| email      | string | null: false, unique: true |
| password   | string | null: false               |

import type { Dictionary } from "../types";

/** SkillGroup.id ごと。個々の技術名は翻訳しません。 */
export const skillGroupLabels: Dictionary["skillGroupLabels"] = {
  game: "ゲーム開発",
  mobile: "モバイル",
  backend: "バックエンド",
  architecture: "アーキテクチャ・設計パターン",
  frontend: "フロントエンド",
  data: "データベース",
  cloud: "クラウド・DevOps",
  quality: "テスト・リリース",
  integrations: "外部連携",
  ai: "AI を活用した開発",
};

/** Platform.name ごと。 */
export const platformNotes: Dictionary["platformNotes"] = {
  iOS: "Swift ネイティブおよび Flutter、App Store で公開",
  Android: "Flutter、Play Console から公開",
  Web: "Laravel の管理画面と Flutter Web",
  iPadOS: "ホテル管理および店舗会計向けアプリ",
  macOS: "共通コードベースからのデスクトップビルド",
  Windows: "デスクトップビルドおよび Unity のビルドターゲット",
};

import type { Dictionary } from "../types";

export const nav: Dictionary["nav"] = {
  about: "自己紹介",
  skills: "スキル",
  experience: "職務経歴",
  platforms: "プラットフォーム",
  contact: "お問い合わせ",
};

export const hero: Dictionary["hero"] = {
  availability: "新しい機会を探しています",
  tagline:
    "Unity のゲーム世界から Flutter アプリ、Laravel のバックエンドまで、6 つのプラットフォームで製品を開発・リリースしています。",
  viewWork: "実績を見る",
  contactMe: "お問い合わせ",
  downloadCv: "履歴書をダウンロード",
};

export const sections: Dictionary["sections"] = {
  about: { title: "自己紹介" },
  skills: {
    title: "技術スキル",
    description:
      "分野ごとに整理しています。強調したグループは日常的に担当している領域で、その他はプロジェクトの要件に応じて使用するツールです。",
  },
  experience: {
    title: "職務経歴",
    description: "各項目を選択すると、担当業務・技術的な判断・使用技術をご覧いただけます。",
  },
  platforms: {
    title: "リリース実績のあるプラットフォーム",
    description:
      "6 つのプラットフォームで本番運用の実績があります。App Store と Google Play へのアカウント登録・申請・公開を自ら担当したアプリも含みます。",
  },
  education: { title: "学歴・語学" },
  contact: { title: "お問い合わせ" },
};

export const labels: Dictionary["labels"] = {
  // Deliberately different from nav.contact so the header does not repeat itself.
  getInTouch: "ご連絡ください",
  skipToContent: "本文へスキップ",
  sectionsNavLabel: "セクション",
  footerNavLabel: "フッター",
  languageLabel: "言語",
  responsibilities: "担当業務",
  engineeringNotes: "技術的な取り組み",
  stack: "使用技術",
  core: "主軸",
  teamOf: "チーム",
  durationSingle: "{months} か月",
  durationBuildMaintain: "開発 {build} か月 + 保守 {maintain} か月",
  educationHeading: "学歴",
  languagesHeading: "語学",
  expandProject: "プロジェクトの詳細を表示",
  collapseProject: "プロジェクトの詳細を隠す",
  projectCountSuffix: "件のプロジェクト（新しい順）",
  decorativeCoverAlt: "装飾用のカバー画像",
};

export const placeholders: Dictionary["placeholders"] = {
  contact:
    "元の履歴書に連絡先の記載がないため、仮の内容です。src/content/contact-links.ts の contactLinks を編集し、href を追加して isPlaceholder を削除すると、各項目がリンクとして機能します。",
  education:
    "元の履歴書に学歴の記載がありません。src/i18n/<locale>/profile.ts の educationItems を更新してください。",
  languages:
    "英語のレベルを確認し、JLPT のレベルを追記してください。日本企業との実務経験があるため、明記する価値があります。",
};

export const categoryLabels: Dictionary["categoryLabels"] = {
  game: "ゲーム",
  mobile: "モバイル",
  web: "Web",
  backend: "バックエンド",
};

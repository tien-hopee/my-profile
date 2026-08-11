import type { Dictionary } from "../types";

export const profile: Dictionary["profile"] = {
  roles: ["ゲームエンジニア", "モバイルエンジニア", "フルスタックエンジニア"],
  positioning:
    "日本のお客様向けに技術ソリューションを提供して 4 年以上のソフトウェアエンジニアです。Web・Android・iOS・macOS・iPadOS・Windows にわたる 15 件以上のプロジェクトに携わり、機能を一貫して担当し、アーキテクチャの技術相談に応じ、App Store および Google Play へのリリースまで担当してきました。",
  about: [
    "業務は 3 つの領域に分かれます。ゲームエンジニアとしては Unity でゲームプレイシステムを実装し、Blender で環境モデルを制作しています。大規模マップをミドルレンジ端末で滑らかに動作させることに注力しました。モバイルエンジニアとしては Flutter および Swift ネイティブのアプリをリリースし、クリーンアーキテクチャ・CI/CD・決済・リアルタイム音声通話とビデオ通話を担当しました。フルスタックエンジニアとしては、Web の管理画面と iPad アプリ向け API の両方を支える Laravel システムを構築・保守しています。",
    "その多くが日本のお客様向けの案件であり、そこから今の働き方が形づくられました。要件の精度、リリース時の慎重な進め方、そして長期の保守です。2 年以上にわたり運用を継続したプロジェクトも複数あります。通常は 2〜5 名のチームで作業し、技術コンサルタントとして実装前に方針を提案する役割を担うことも多くあります。",
    "コードの周辺で実際に必要となる作業も担当します。ストアアカウントの登録、アプリ内課金と決済ゲートウェイの導入、Sentry と DataDog の構築、遅い SQL クエリの最適化などです。",
  ],
  stats: [
    { value: "4+", label: "年の実務経験", detail: "2022 年 3 月から" },
    { value: "15+", label: "担当プロジェクト", detail: "うち 12 件を以下に記載" },
    { value: "6", label: "リリース実績のあるOS", detail: "Web からデスクトップまで" },
    { value: "4", label: "担当した職種", detail: "ゲームからバックエンドまで" },
  ],
  facts: [
    { term: "実務経験", detail: "4 年以上" },
    { term: "専門領域", detail: "ゲーム・モバイル・フルスタック" },
    { term: "主な取引先", detail: "主に日本市場" },
    { term: "チーム規模", detail: "2 〜 5 名" },
    { term: "最長プロジェクト", detail: "28 か月の保守" },
  ],
  contactLabels: {
    email: "メール",
    phone: "電話番号",
    github: "GitHub",
    linkedin: "LinkedIn",
    location: "所在地",
  },
  educationItems: [
    {
      institution: "出身大学・専門学校",
      credential: "学位 — 専攻",
      period: "20XX 年 — 20XX 年",
    },
  ],
  languages: [
    { name: "ベトナム語", level: "母語" },
    { name: "英語", level: "業務レベル" },
    { name: "日本語", level: "JLPT のレベルを追記してください" },
  ],
};

import type { Dictionary } from "../types";

/** src/content/projects/ の Project.id ごと。プロジェクト名は原語のまま表記します。 */
export const projects: Dictionary["projects"] = {
  "delivery-game": {
    name: "Delivery Game",
    role: "ゲームエンジニア",
    summary:
      "実在の街並みと現地の street culture を再現した、ローカライズ配達シミュレーションゲームです。プレイヤーは配達ドライバーとなり、見慣れた街を走りながら日常の交通事情をユーモラスに体験します。",
    responsibilities: [
      "Blender で実在の資産と環境をモデリングし、リアルな街並みを制作しました。",
      "Unity（C#）でゲームプレイの中核となる機能を設計・実装しました。",
      "大規模マップを効率的に扱うための技術的解決策を調査し、提案しました。",
      "入念なテストを行い、対象端末すべてで滑らかに動作するよう最適化しました。",
    ],
    engineering: [
      "Service Locator と Event Bus を用いたクリーンアーキテクチャによる疎結合な構成",
      "State Machine・Strategy・インターフェース抽象化・Singleton・Object Pooling",
      "チャンク読み込みによる World Streaming、LOD、ビルボード、テクスチャ圧縮",
      "3D 資産向けの自動リギングパイプライン",
    ],
  },
  "learning-japanese-career": {
    name: "Learning Japanese & Japan Career",
    role: "モバイルエンジニア",
    summary:
      "東南アジアおよび東アジアのユーザー向けの多言語オールインワンアプリです。自動化された日本語学習と講師による指導を組み合わせ、日本での就職に特化した求人ポータルを統合しています。",
    responsibilities: [
      "技術コンサルティングを行い、アプリのアーキテクチャと開発効率を改善する方針を提案しました。",
      "他職種のチームと緊密に連携して新機能を実装・統合し、期日どおりのリリースを実現しました。",
      "幅広い端末で入念にテストと最適化を行い、一貫したユーザー体験を確保しました。",
      "ストアのガイドラインに従い、App Store と Google Play への一連のリリース作業を担当しました。",
    ],
    engineering: [
      "Riverpod・Flutter Hooks・GetIt と Injectable による DI を用いたクリーンアーキテクチャ",
      "学習機能の中核としての音声区間検出（VAD）と音声録音",
    ],
  },
  "learning-japanese": {
    name: "Learning Japanese",
    role: "モバイルエンジニア",
    summary:
      "ベトナムの日本語学習センター向けに開発した e ラーニングアプリです。ひらがな・カタカナの基礎から JLPT N1 まで体系的な学習ロードマップを提供し、自習と講師による直接指導をつなぎます。",
    responsibilities: [
      "技術コンサルティングを行い、他職種のチームと連携して要望された機能を開発・統合しました。",
      "ストアアカウントの登録をお客様にご案内し、アプリ内課金と決済ゲートウェイを構築しました。",
      "総合的なテストを実施し、App Store と Google Play への一連のリリースを管理しました。",
    ],
    engineering: [
      "Provider・Flutter Hooks・GetIt と Injectable による DI を用いたクリーンアーキテクチャ",
      "アプリ内課金と決済ゲートウェイをゼロから導入",
    ],
  },
  "check-in-application": {
    name: "Check-in Application",
    role: "モバイルエンジニア",
    summary:
      "ホテル向けのチェックイン・チェックアウトアプリです。QR コード・予約番号・電話番号による自動チェックインに対応し、Coiney による自動決済、端末経由でのビザ情報の取得、ルームカードの発行に対応しています。ホテルの人員負担を軽減しつつ、手続きを迅速かつ確実にします。",
    responsibilities: [
      "開発および保守担当として、2 年以上にわたりシステムの安定稼働を維持しました。",
      "事業とお客様の変化する要件に合わせて新機能を実装しました。",
      "Firebase と Sentry で端末およびエラーの情報を収集し、迅速な対応につなげました。",
      "ゲストサポートの通話機能に WebRTC を導入し、明瞭な音声通話とビデオ通話を実現しました。",
    ],
    engineering: [
      "端末ハードウェアとの安定した連携のための Swift ネイティブ実装",
      "無人での決済処理のための Coiney Payment SDK",
      "いつでもどこでもエラーを把握するための Sentry と Firebase",
    ],
  },
  "hotel-pms-web": {
    name: "Hotel PMS Web",
    role: "フルスタックエンジニア",
    summary:
      "ホテルの総合管理システムです。ゲストは予約・チェックイン・チェックアウトを行い、管理者は客室・予約・清掃業務を管理します。ゲスト・管理者・上位管理者の各権限に対応し、iPad と Web クライアントが利用する RESTful API を提供します。",
    responsibilities: [
      "Web と API の双方にわたるシステムの構築と保守を担当しました。",
      "売上統計画面と統計ファイルの出力機能を実装しました。",
      "本番稼働中のアプリケーションの運用と更新を継続しました。",
    ],
    engineering: [
      "Web アプリと iPad クライアント向け REST API の両方を Laravel で提供",
      "ホテル業務向けの連携：手間いらず（Temairazu）の在庫管理、Remote Lock による自動施錠",
      "Apple Wallet・Google Wallet のパス発行、Coiney 決済",
      "Sentry と DataDog による性能監視、AWS と CSV による入出力管理",
    ],
  },
  "kid-backend": {
    name: "KID",
    role: "バックエンドエンジニア",
    summary:
      "Kotlin とクリーンアーキテクチャで構築した独立バックエンドサービスで、API システムの中核を担います。Web 上での画像販売、すなわちアップロード・価格設定・保存・アカウント登録・並び替え・画像編集を実現します。",
    responsibilities: [
      "並び替え・編集・削除・移動といった画像管理機能を実装しました。",
      "遅いクエリを最適化しました。",
      "データベースに対する同時アップロードと削除の競合を処理しました。",
    ],
    engineering: [
      "コード品質と責務分離を担保するためのクリーンアーキテクチャ",
      "読みやすく理解しやすい API のための OpenAPI 仕様",
      "すべての変更に対して必須としたユニットテストと機能テスト",
      "保存処理とバリデーションのための AWS 連携",
    ],
  },
  "resort-cloud-ticket-web": {
    name: "Resort Cloud Ticket Web",
    role: "Flutter エンジニア",
    summary:
      "ホテル・レストラン管理システムの一部として、エンドユーザー向けのクーポンと食事券の管理・利用を担うアプリです。ホテルとレストランの管理業務を自動化し、効率化します。",
    responsibilities: [
      "クーポンの表示や利用を含む各機能の実装とテストを担当しました。",
      "6 か月のサポート期間を通じてアプリを保守しました。",
    ],
    engineering: [
      "同一製品群のコンポーネントを再利用するため Flutter Web を採用",
      "クーポンと食事券の利用を自動化するためのバーコード活用",
    ],
  },
  "point-management-app": {
    name: "Point Management App",
    role: "Flutter エンジニア",
    summary:
      "ホテル向けの iPad アプリです。客室を予約したゲストのクーポン利用を支援するとともに、ホテル従業員向けの管理機能を提供します。",
    responsibilities: [
      "お客様の基準と要件を満たすようアプリの保守と運用を担当しました。",
    ],
    engineering: [
      "ホテル製品群のコンポーネント再利用のための Flutter",
      "ホテル・レストラン業務の自動化のためのバーコードと Pasori リーダー",
      "記録管理のためのレシート印刷",
    ],
  },
  "ado-telemedicine": {
    name: "ADO",
    role: "Flutter エンジニア",
    summary:
      "患者と医師・薬局・病院との距離を縮めるオンライン診療アプリです。患者は診療予約を取り、予約時刻に Zoom で通話し、メッセージで相談し、処方箋をネットワーク内の薬局へ直接送って自宅配送を受けられます。クリニック管理、近隣の薬局・病院の検索、処方履歴の閲覧に加え、国際展開を見据えた決済連携も備えます。",
    responsibilities: [
      "アプリの創業者から要件と業務ロジックを直接ヒアリングしました。",
      "医師プロフィール・患者プロフィール・処方履歴・Zoom 診療といった中核機能を実装しました。",
    ],
    engineering: [
      "予約された診療のための Zoom SDK",
      "病院・クリニック・薬局を地図上に可視化する Google Maps",
      "即時通知のための Firebase、配信のための CI/CD",
    ],
  },
  "real-estate-services": {
    name: "Real Estate Services",
    role: "Flutter エンジニア",
    summary:
      "自ら共同創業し、企画から関わった Web とモバイルの製品です。所在地・区画番号・所有者名を地図とテキストで確認できるようにし、不動産情報を中心としたユーザーコミュニティを形成します。ユーザーは物件情報を投稿し、チャットや通話で連絡を取り合えます。",
    responsibilities: [
      "製品の共同創業と企画立案を担いました。",
      "チームとともにアイデア出し・設計・技術選定を行いました。",
      "モバイルアプリの画面と機能を実装しました。",
    ],
    engineering: [
      "Android と iOS を素早く同時展開するための Flutter",
      "通知のための Firebase、物件可視化のための Maps",
    ],
  },
  "social-network-blockchain": {
    name: "Social Network Blockchain",
    role: "Flutter エンジニア",
    summary:
      "暗号資産のエコシステム内で動作する SNS アプリです。動画・フィード・ショート動画を 1 つのアプリにまとめ、アプリ内の支払いと消費に暗号資産を利用します。",
    responsibilities: [
      "ビデオ通話・ログイン・新規登録といった重要機能の実装とテストを担当しました。",
      "チームと連携し、要件の変更に迅速に対応しました。",
    ],
    engineering: [
      "アカウント保護のための指紋認証と顔認証",
      "いいね・シェア・コメント・チャット・ビデオ通話を支える Socket.IO と WebRTC",
      "プッシュ通知のための Firebase Messaging",
    ],
  },
  "eth-miner-management": {
    name: "ETH Miner Management App",
    role: "Flutter エンジニア",
    summary:
      "どこからでも安全に ETH マイナーを管理できるモバイルアプリです。現在の ETH 残高とハッシュレートの確認、マイナーの稼働状況の監視、受領した ETH の統計表示、ウォレットへの送金に対応し、生体認証と 2 要素認証で保護します。",
    responsibilities: [
      "ログイン、現在の ETH 残高の確認、期間ごとの稼働統計を実装しました。",
      "チームと連携し、バックエンドとデザインの課題解決を支援しました。",
    ],
    engineering: [
      "継続的かつ即時のデータ送信と通知のための Socket.IO と Firebase",
      "セキュリティ強化のための指紋認証・顔認証と 2 要素認証",
    ],
  },
};

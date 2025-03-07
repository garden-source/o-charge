This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> **注意**: `next.config.js` に `output: 'export'` の設定が必要です。

### 2. FTPクライアントの準備

お好みのFTPクライアントをインストールしてください（FileZilla、WinSCP、Cyberduckなど）。

### 3. FTPサーバーへの接続

FTPクライアントで以下の情報を使用して接続します：

- ホスト: (FTPサーバーのアドレス)
- ユーザー名: (提供されたユーザー名)
- パスワード: (提供されたパスワード)
- ポート: 21（通常のFTP）または22（SFTP）

### 4. ファイルのアップロード

1. ローカルの `out` ディレクトリ内のすべてのファイルを選択
2. サーバー上の公開ディレクトリ（通常は `public_html`）にアップロード

### 5. 更新の確認

ウェブサイトにアクセスして、更新が正しく反映されていることを確認してください。

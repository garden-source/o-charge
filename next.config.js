/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,　// 画像最適化をしない場合
        // domains: ['example.com'], // 外部画像を使用する場合はドメインを追加
    },
    // SSGを簡易的に有効にする場合はこんな設定例
    output: 'export',
}

module.exports = nextConfig

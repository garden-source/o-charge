/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,　// 画像最適化をしない場合
        domains: ['res.cloudinary.com'], // Cloudinaryのドメインを追加
    },
    // SSGを簡易的に有効にする場合はこんな設定例
    output: 'export',
}

module.exports = nextConfig

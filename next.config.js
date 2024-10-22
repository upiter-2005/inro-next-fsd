const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'www.api.inro.com.ua'
      },
      ] // <== Domain name
  }
}

module.exports = nextConfig
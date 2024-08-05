/** @type {import('next').NextConfig} */

function defineNextConfig(config){
    return config
}

export default defineNextConfig({
    webpack(config){
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options:{icon:true}}]
        })
    return config
    },
    experimental: {
        serverActions: {
          allowedOrigins: ["connection-help-wanmei.com", "localhost:3001"]
        }
      }
})

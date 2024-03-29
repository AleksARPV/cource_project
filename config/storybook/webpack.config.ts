import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }
    config.resolve!.modules!.push(paths.src)
    config.resolve!.extensions!.push('ts', 'tsx')
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src
    }

    config.module!.rules = config.module!.rules!.map((rule: any) => {
        if (/svg./.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module!.rules.push(buildCssLoaders(true))

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}

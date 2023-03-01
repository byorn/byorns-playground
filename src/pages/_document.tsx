/* eslint-disable react/display-name */
import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from "next/document";
import createCache from '@emotion/cache';
// @ts-ignore
import createEmotionServer from '@emotion/server/create-instance';
// will apply to the whole page
class MyDocument extends Document{
    render() {
        return <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="description"
                    content="Byorn's portfolio of software development technologies. A playground for research and development"
                />
                <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
                />
                <meta
                    property="og:title"
                    content="Byorn's playground for all things full-stack software R & D"
                />
                <meta
                    property="og:description"
                    content="Byorn's portfolio of software development technologies. A playground for research and development"
                />
                <meta
                    property="og:url"
                    content="https://www.byorns-playground.com/"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    }
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createCache({ key: 'css', prepend: true });
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    // @ts-ignore
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
export default MyDocument;
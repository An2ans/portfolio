import Document, {Html, Main, NextScript, Head} from "next/document";

class MyDocument extends Document {

    render(){
        return (
            <Html lang="en">
                <Head>
                    {/* Consolas Font */}
                    <link 
                        rel="preload" 
                        href="/fonts/CONSOLA.TTF" 
                        as="font" 
                        crossOrigin="anonymous">
                    </link>
                    <link 
                        rel="preload" 
                        href="/fonts/CONSOLAB.TTF" 
                        as="font" 
                        crossOrigin="anonymous">
                    </link>
                    <link 
                        rel="preload" 
                        href="/fonts/consolai.ttf" 
                        as="font" 
                        crossOrigin="anonymous">
                    </link>

                    {/* FontAwesome */}

                    <link   
                        rel="stylesheet" 
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
                        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" 
                        crossOrigin="anonymous" 
                        referrerpolicy="no-referrer" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;
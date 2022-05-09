import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { ApolloLink } from "@apollo/client";
import { Global } from "@emotion/react";
// import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Global styles={globalStyles} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;

import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
// import LayoutBanner from "./banner/LayoutBanner.container";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const LayoutWrapper = styled.div`
    display: flex;
    padding: 30px 20px;
    background-color: #e5e5e5;
    height: 100vh;
`;

const Body = styled.div`
    width: 764px;
`;

const BodyWrapper = styled.div`
    display: flex;
`;

// const HIDDEN_Banner = ["/boards/new"];

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <LayoutWrapper>
                {/* <LayoutBanner /> */}
                <LayoutNavigation />
                <BodyWrapper>
                    <Body>{props.children}</Body>
                </BodyWrapper>
            </LayoutWrapper>
        </>
    );
}

import { Fragment } from "react";
import { MenuItem, Wrapper, WrapperTalkr } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import Image from "next/image";
import styled from "@emotion/styled";

const NAVIGATION_MENUS = [
    {
        name: "전체 글 보기",
        page: "/boards",
        activeIcon: "/image/ic_list.png",
        inactiveIcon: "/image/ic_listblack.png",
    },
    {
        name: "새 글 작성",
        page: "/boards/new",
        activeIcon: "/image/ic_new.png",
        inactiveIcon: "/image/ic_++.png",
    },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
    return (
        <Wrapper>
            <WrapperTalkr>
                <Image src={"/image/Vector.png"} alt="string Top" width={20} height={18} />
                <NavitopTalkr>TALKR</NavitopTalkr>
            </WrapperTalkr>
            <Divider />
            {NAVIGATION_MENUS.map((el) => (
                <Fragment key={el.page}>
                    <MenuItem id={el.page} onClick={props.onClickMenu}>
                        <Image
                            src={el.inactiveIcon}
                            alt="string menu icon"
                            width={17}
                            height={17}
                        />
                        <MenuItemName>{el.name}</MenuItemName>
                    </MenuItem>
                </Fragment>
            ))}
        </Wrapper>
    );
}

const NavitopTalkr = styled.div`
    margin-left: 6px;
`;

const MenuItemName = styled.div`
    margin-left: 12px;
`;

const Divider = styled.div`
    border: 1px solid #e5e5e5;
    width: 100%;
`;

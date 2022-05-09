import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 764px;
    height: 388px;
`;

export const Title = styled.div`
    padding-left: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
    display: flex;

    & div {
        width: 220px;
        height: 115px;
        margin-bottom: 30px;
        padding-right: 12px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img``;

export const Writer = styled.div``;

export const Contents = styled.div`
    margin-left: 40px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
`;

export const Button = styled.button`
    width: 80px;
    height: 30px;
    background-color: #999999;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;
    color: white;
    border-radius: 30px;

    :hover {
        background-color: #6400ff;
        border-color: white;
    }
`;

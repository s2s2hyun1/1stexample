import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 764px;
    height: 648px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5);
    background-color: #fff;
`;

export const Title = styled.div`
    font-family: "SUIT";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`;

export const WiterWrapper = styled.div``;

export const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Label = styled.div<{ marginLeft?: number }>`
    width: 60px;
    font-family: "SUIT";
    font-weight: 700;
    font-size: 14px;
    margin-right: 20px;
    margin-left: ${(props) => `${props.marginLeft}px` ?? 0};
`;

export const Subject = styled.input`
    background: #ffffff;
    /* #E5E5E5_border */

    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 100%;
    height: 40px;
`;

export const Contents = styled.textarea`
    background: #ffffff;
    /* #E5E5E5_border */
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 100%;
    height: 240px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
`;

export const UploadButton = styled.button`
    width: 80px;
    height: 80px;
    background: #fafafa;
    /* #E5E5E5_border */
    border: 1px dashed #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    margin-right: 10px;
    padding: 0;
`;

export const Writer = styled.input`
    width: 242px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
`;

export const Password = styled.input`
    width: 242px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    background: #6400ff;
    border-radius: 30px;
`;

export const CancleButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    background: #999999;
    border-radius: 30px;
`;

export const Error = styled.div`
    padding-top: 10px;
    font-size: 14px;
    color: red;
`;

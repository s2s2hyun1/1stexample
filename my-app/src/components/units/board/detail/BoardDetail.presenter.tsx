import styled from "@emotion/styled";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
    return (
        <S.Wrapper>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <Divider />
            <S.ImageWrapper>
                {props.data?.fetchBoard.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                        <div key={el}>
                            <S.Image src={`https://storage.googleapis.com/${el}`} />
                        </div>
                    ))}
            </S.ImageWrapper>
            <S.InfoWrapper>
                <S.Info>
                    <S.Avatar src={"/image/ic_account_circle.png"} />
                    <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                </S.Info>
                <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            </S.InfoWrapper>
            <S.BottomWrapper>
                <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
                <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
                <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
            </S.BottomWrapper>
        </S.Wrapper>
    );
}

const Divider = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #6400ff;
`;

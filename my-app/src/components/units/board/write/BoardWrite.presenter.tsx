import styled from "@emotion/styled";
import * as S from "./BoardWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Upload01.container";
import { v4 as uuid4 } from "uuid";

export default function BoardwriteUI(props) {
    return (
        <>
            <S.Wrapper>
                <S.Title>{props.isEdit ? "게시판 수정" : "새 글 작성"}</S.Title>
                <Divider />
                <S.WiterWrapper>
                    <S.InputWrapper>
                        <S.Label>제목</S.Label>
                        <S.Subject
                            id="title"
                            type="text"
                            placeholder="제목을 작성해주세요."
                            onChange={props.onChangeTitle}
                            defaultValue={props.data?.fetchBoard.title}
                        />
                    </S.InputWrapper>
                    <S.ContentWrapper>
                        <S.Label>내용</S.Label>
                        <S.Contents
                            id="contents"
                            placeholder="내용을 작성해주세요."
                            onChange={props.onChangeContents}
                            defaultValue={props.data?.fetchBoard.contents}
                        />
                    </S.ContentWrapper>
                </S.WiterWrapper>
                <S.ImageWrapper>
                    <S.Label>이미지</S.Label>
                    {props.fileUrls.map((el, index) => (
                        <Uploads01
                            key={uuid4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                        />
                    ))}
                </S.ImageWrapper>
                <S.AuthorWrapper>
                    <S.InputWrapper>
                        <S.Label>작성자</S.Label>
                        <S.Writer
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={props.onChangeWriter}
                            defaultValue={props.data?.fetchBoard.writer}
                            readOnly={!!props.data?.fetchBoard.writer}
                        />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Error>{props.passwordError}</S.Error>
                        <S.Label marginLeft={40}>비밀번호</S.Label>
                        <S.Password
                            type="password"
                            placeholder="비밀번호를 작성해주세요."
                            onChange={props.onChangePassword}
                        />
                        <S.Error>{props.passwordError}</S.Error>
                    </S.InputWrapper>
                </S.AuthorWrapper>
                <S.ButtonWrapper>
                    <S.SubmitButton
                        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                    >
                        {props.isEdit ? "수정" : "등록"}
                    </S.SubmitButton>
                    <S.CancleButton>취소</S.CancleButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </>
    );
}

const Divider = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #6400ff;
`;

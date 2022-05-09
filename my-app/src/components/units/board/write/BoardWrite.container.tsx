import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { IUpdateBoardInput } from "./BoardWrite.types";
import BoardwriteUI from "./BoardWrite.presenter";
import { ChangeEvent, useState, useEffect } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";

interface IBoardPWriteProps {
    isEdit: boolean;
    data?: any;
}

export default function BoardWrite(props: IBoardPWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        if (event.target.value !== "") {
            setTitleError("");
        }
        if (event.target.value && contents && writer && password) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
        if (event.target.value !== "") {
            setContentsError("");
        }

        if (title && event.target.value && writer && password) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }

        if (title && password && event.target.value && password) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (event.target.value !== "") {
            setPasswordError("");
        }

        if (title && contents && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };
    useEffect(() => {
        if (props.data?.fetchBoard.images?.length) {
            setFileUrls([...props.data?.fetchBoard.images]);
        }
    }, [props.data]);

    const onClickSubmit = async () => {
        if (title === "") {
            setWriterError("작성자를 입력해주세요.");
        }
        if (contents === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (writer === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (password === "") {
            setContentsError("내용을 입력해주세요.");
        }
        if (title !== "" && contents !== "" && writer !== "" && password !== "") {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents,
                            images: fileUrls,
                        },
                    },
                });
                console.log(result);
                Modal.success({ content: "게시물 등록에 성공하였습니다!" });
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (error: any) {
                Modal.error({ content: error.message });
            }
        }
    };
    const onClickUpdate = async () => {
        if (!title && !contents) {
            alert("수정한 내용이 없습니다.");
            return;
        }

        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;

        try {
            await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput,
                },
            });
            Modal.success({ content: "게시물 수정에 성공하였습니다!" });
            router.push(`/boards/${router.query.boardId}`);
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <BoardwriteUI
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeFileUrls={onChangeFileUrls}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            data={props.data}
            isEdit={props.isEdit}
            fileUrls={fileUrls}
        />
    );
}

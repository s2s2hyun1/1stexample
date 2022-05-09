import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListUI(props) {
    if (!props.data) return <div />;
    return (
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            {props.data?.fetchBoards.map((el) => (
                <S.Wrapper key={el._id} id={el._id} onClick={props.onClickMoveToBoardDetail}>
                    <S.Title>{el.title}</S.Title>
                    <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                </S.Wrapper>
            ))}
        </InfiniteScroll>
    );
}

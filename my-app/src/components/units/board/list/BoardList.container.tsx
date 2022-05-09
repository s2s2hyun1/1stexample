import BoardListUI from "./Boardlist.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
    const router = useRouter();
    const { data, fetchMore } = useQuery(FETCH_BOARDS);

    const onClickMoveToBoardDetail = (event) => {
        if (event.target) router.push(`/boards/${event.currentTarget.id}`);
    };

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchBoards) return { fetchBoards: [...prev.fetchBoards] };
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
                };
            },
        });
    };

    return (
        <BoardListUI
            data={data}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
            onLoadMore={onLoadMore}
        />
    );
}

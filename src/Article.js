const HeadLine = ({ title }) => {
    return (
        <>
            <h1>기사 제목 : {title}</h1>
        </>
    )
}

const Contents = ({ description }) => {
    return (
        <>
            <p>본문 내용</p>
            <p>{description}</p>
        </>
    )
}

const NewsDate = ({ date }) => {
    return (
        <>
            <p>작성일 : {date}</p>
        </>
    )
}


const Article = ({ data }) => {
    return (
        <>
            {/* <h1>기사 제목 : {data.title}</h1>
            <p>{data.description}</p>
            <p>작성일자 : {data.date}</p> */}
            <HeadLine title={data.title} />

            <Contents description={data.description} />

            <NewsDate date={data.date} />

            <hr />
        </>
    );
}

export default Article;
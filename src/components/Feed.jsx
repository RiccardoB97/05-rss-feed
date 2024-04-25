const Feed = ({ title, link, date }) => {
    
    let formattedDate = { day: "numeric", month: "long", year: "numeric" }
    let articleDate = new Date(date).toLocaleDateString("en-GB", formattedDate)
    return (
        <>
            <a href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                    <h3 className="text-xl mb-1 underline decoration-blue-400">{title}</h3>
                    <p>{articleDate}</p>
            </a>
        </>
    )
}

export default Feed;
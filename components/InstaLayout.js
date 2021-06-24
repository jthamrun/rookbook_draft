import Link from "next/link";

function InstaLayout({ instaPosts }) {
    return (
        <>
            <ul>
                {/* let's iterate through each of the
                instagram posts that were returned
                from the Instagram API*/}
                {instaPosts.map(({ node }, i) => {
                    console.log(node.thumbnail_src)
                    return (
                        // let's wrap each post in an anchor tag
                        // and construct the url for the post using
                        // the shortcode that was returned from the API
                        <li>
                            {/* set the image src equal to the image
                            url from the Instagram API*/}
                            <img
                            src={node.thumbnail_src}
                            alt={
                                // the caption with hashtags removed
                                node.edge_media_to_caption.edges[0].node.text
                                .replace(/(#\w+)+/g, "")
                                .trim()
                            }
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default InstaLayout

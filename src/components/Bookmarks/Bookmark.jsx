import PropTypes from "prop-types";
import BookmarkSingle from "../bookmarkSingle/bookmarkSingle";

const Bookmark = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-2xl text-center bg-violet-200 p-4 ">
                    Reading Time: {readingTime} min

                </h3>
            </div>
            <h2 className="text-3xl text-center ">
                Bookmarked Blogs: {bookmarks.length}
            </h2>
            {
                bookmarks.map(bookmarkSingle=>
                    <BookmarkSingle key={bookmarkSingle.id} 
                    bookmarkSingle={bookmarkSingle}>

                    </BookmarkSingle>
                )
            }
        </div>
    );
};
Bookmark.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmark;
import PropTypes from "prop-types";


const BookmarkSingle = ({bookmarkSingle}) => {
    const {title}=bookmarkSingle;
    console.log(bookmarkSingle,title);
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl '>
            <h3 className="text-2xl">
                {title}
            </h3>
        </div>
    );
};

BookmarkSingle.propTypes={
    bookmarkSingle:PropTypes.object
}
export default BookmarkSingle;
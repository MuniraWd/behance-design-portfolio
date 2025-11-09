
const IconButtonFilter = ({ Tag="button",  children }) => {
    return (
        <Tag 
        className={`flex items-center outline-0 gap-2 py-2 px-5 bg-white rounded-md border border-[#E8E8E8]`}>
            {children}
        </Tag>
    )
}
export default IconButtonFilter

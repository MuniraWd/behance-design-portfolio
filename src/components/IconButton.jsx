
const IconButton = ({ Tag="button",border,  children }) => {
    return (
        <Tag 
        className={`flex item-center gap-2 py-2 px-5 bg-white rounded-full ${border ? "border border-[#E8E8E8]" : "border-transparent"} `}>
            {children}
        </Tag>
    )
}
export default IconButton

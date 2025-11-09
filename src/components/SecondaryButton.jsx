
const SecondryButton = ({ Tag="button", active,  children }) => {
    return (
        <Tag 
        className={`py-1.5 px-3.5 rounded-full ${active ? "bg-black text-white" : "bg-white text-black"}`}>
            {children}
        </Tag>
    )
}
export default SecondryButton
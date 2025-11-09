
const Button = ({ Tag="button", primary=true, secondary,  children }) => {
    return (
        <Tag 
        className={`py-1 px-5 rounded-full ${secondary ? "text-primary" : "text-white"} ${secondary ? "bg-[#F5F8FF] border border-[#DEE8FF]" : "bg-primary border border-primary"}`}>
            {children}
        </Tag>
    )
}
export default Button

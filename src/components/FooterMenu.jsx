function FooterMenu({children}) {
  return (
    <div className='flex gap-2 items-center pr-4 border-r-1 border-borderGray'>
        {children}
    </div>
  )
}

export default FooterMenu
function Container({children , className}) {
  return (
    <div className={`m-auto lg:w-9/12 ${className}`}>{children}</div>
  )
}

export default Container
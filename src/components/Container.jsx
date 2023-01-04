function Container({children , className}) {
  return (
    <div className={`mx-auto max-w-5xl ${className}`}>{children}</div>
  )
}

export default Container
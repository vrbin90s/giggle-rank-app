const Container = (props) => {
  const { children } = props;
  return(
    <div className="container">
      <div className="inner__wrapper">
        {children}
      </div>
    </div>
  )
}

export default Container;
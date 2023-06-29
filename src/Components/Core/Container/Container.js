import './Container.scss';
const Container = (props) => {
  const { children } = props;
  return(
    <div className="container">
      {children}
    </div>
  )
}

export default Container;
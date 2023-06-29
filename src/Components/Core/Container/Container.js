import './Container.scss';
const Container = (props) => {
  const { children } = props;
  return(
    <div className="container container__custom">
      {children}
    </div>
  )
}

export default Container;
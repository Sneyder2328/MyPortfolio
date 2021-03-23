import * as React from "react"
import { navigate } from 'gatsby'

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default NotFoundPage
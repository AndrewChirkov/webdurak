import { Navigate } from "react-router";

interface PrivateRouterProps {
  children: JSX.Element,
  property: boolean,
  redirectPath?: string
}

export const PrivateRouter = (props: PrivateRouterProps) => {
  const redirectPath = props.redirectPath || '/'

  if(!props.property) {
    return <Navigate to={redirectPath} />
  }

  if (props.property) {
    return props.children
  }
}
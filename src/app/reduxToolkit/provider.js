'use client'

import { store } from "./store";

const { Provider } = require("react-redux");

//Provider se uske andr ke sare component ko {children} ke use se sabhi component uske andr aa gye
const Providers = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers

import {Outlet} from 'react-router-dom'

export const Page = () => {
  return <Outlet/>
}

export const PageIndex = () => {
  return (
    <span>
    Check the page source, you'll see a screwed up link href
  </span>
  )
}

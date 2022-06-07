import { ActiveContextProvider } from '@/src/contexts/ActiveContext/ActiveContextProvider'
import { CenterContextProvider } from '@/src/contexts/CenterContext/CenterContextProvider'
import { IsToastOpenContextProvider } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { MenuWidthContextProvider } from '@/src/contexts/MenuWidthContext/MenuWidthContextProvider'
import { ToastContextProvider } from '@/src/contexts/ToastContext/ToastContextProvider'

type Props = {
  children: JSX.Element
}
const AppProvider = ({ children }: Props) => {
  return (
    <ActiveContextProvider>
      <CenterContextProvider>
        <IsToastOpenContextProvider>
          <MenuWidthContextProvider>
            <ToastContextProvider>{children}</ToastContextProvider>
          </MenuWidthContextProvider>
        </IsToastOpenContextProvider>
      </CenterContextProvider>
    </ActiveContextProvider>
  )
}

export default AppProvider

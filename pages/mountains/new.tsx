import React from 'react'
import MountainForm from '@/src/components/mountain/mountain-form/MountainForm'
import { z } from 'zod'
import { DefaultPageProps } from '../_app'
import { useCreateMountainWithSessionMutation } from '@/graphql/generated/client'
import Sidebar from '@/src/components/layout/Sidebar'
import { Marker } from '@react-google-maps/api'
import { useSession } from 'next-auth/react'
import { useCenterContextState } from '@/src/contexts/CenterContext/CenterContextProvider'
import { useFormHook } from '@/src/hooks/useFormHook/useFormHook'

export const CreateMountain = z.object({
  name: z.string(),
  lat: z.string(),
  lng: z.string(),
})
const NewMountainPage = () => {
  const center = useCenterContextState()
  const { onFailed, onSucceeded } = useFormHook()
  const { data: session } = useSession()
  const [createMountain] = useCreateMountainWithSessionMutation()
  const create = (values: z.infer<typeof CreateMountain>) => {
    const { name, lat, lng } = values
    createMountain({
      variables: {
        data: {
          name,
          lat: Number(lat),
          lng: Number(lng),
          userId: session!.user!.id,
        },
      },
    }).then((res) => {
      if (res.errors) {
        onFailed()
        return
      }
      onSucceeded(`/mountains/${res.data?.createMountainWithSession.id}`)
    })
  }
  return (
    <>
      <Sidebar backUrl={`/mountains`}>
        <>
          <div style={{ marginTop: '10px' }}>
            <MountainForm
              submitText='Create Mountain'
              onSubmit={(values) => create(values)}
              initialValues={{}}
              schema={CreateMountain}
            />
          </div>
        </>
      </Sidebar>
      {center && <Marker position={center} />}
    </>
  )
}

const defaultProp: DefaultPageProps = {
  auth: true,
}
NewMountainPage.defaultProps = defaultProp
export default NewMountainPage

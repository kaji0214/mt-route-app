import { useEffect, useState } from 'react'
import { useGoogleMap } from '@react-google-maps/api'

type UseEditablePolylineReturnValue = {
  polyline: google.maps.Polyline
  getLatlngs: () => google.maps.LatLngLiteral[]
}
export const useEditablePolyline = (args: {
  positions: google.maps.LatLngLiteral[]
}): UseEditablePolylineReturnValue => {
  const map = useGoogleMap()
  const { positions } = args
  const [polyline, setPolyline] = useState<google.maps.Polyline | undefined>()
  const getLatlngs = (): google.maps.LatLngLiteral[] => {
    if (!polyline) return []

    const latlngs: google.maps.LatLngLiteral[] = []
    const path = polyline.getPath()
    path.forEach((item: google.maps.LatLng) => {
      latlngs.push({ lat: item.lat(), lng: item.lng() })
    })
    return latlngs
  }

  /**
   * Uncaught ReferenceError: google is not defined
   * https://developers.google.com/maps/documentation/javascript/examples/delete-vertex-menu#maps_delete_vertex_menu-typescript
   */
  class DeleteMenu extends google.maps.OverlayView {
    private div_: HTMLDivElement
    private divListener_?: google.maps.MapsEventListener

    constructor() {
      super()
      this.div_ = document.createElement('div')
      this.div_.className = 'delete-menu'
      this.div_.innerHTML = 'Delete'

      const menu = this

      this.div_.addEventListener('click', () => {
        menu.removeVertex()
      })
      // google.maps.event.addDomListener(this.div_, 'click', () => {
      //   menu.removeVertex();
      // });
    }

    onAdd() {
      const deleteMenu = this
      const map = this.getMap() as google.maps.Map

      this.getPanes()!.floatPane.appendChild(this.div_)

      // mousedown anywhere on the map except on the menu div will close the
      // menu.

      map.getDiv().addEventListener(
        'mousedown',
        (e: Event) => {
          if (e.target != deleteMenu.div_) {
            deleteMenu.close()
          }
        },
        { capture: true },
      )
      // this.divListener_ = google.maps.event.addDomListener(
      //   map.getDiv(),
      //   'mousedown',
      //   (e: Event) => {
      //     if (e.target != deleteMenu.div_) {
      //       deleteMenu.close();
      //     }
      //   },
      //   true
      // );
    }

    onRemove() {
      if (this.divListener_) {
        google.maps.event.removeListener(this.divListener_)
      }

      ;(this.div_.parentNode as HTMLElement).removeChild(this.div_)

      // clean up
      this.set('position', null)
      this.set('path', null)
      this.set('vertex', null)
    }

    close() {
      this.setMap(null)
    }

    draw() {
      const position = this.get('position')
      const projection = this.getProjection()

      if (!position || !projection) {
        return
      }

      const point = projection.fromLatLngToDivPixel(position)!

      this.div_.style.top = point.y + 'px'
      this.div_.style.left = point.x + 'px'
    }

    /**
     * Opens the menu at a vertex of a given path.
     */
    open(map: google.maps.Map, path: google.maps.MVCArray<google.maps.LatLng>, vertex: number) {
      this.set('position', path.getAt(vertex))
      this.set('path', path)
      this.set('vertex', vertex)
      this.setMap(map)
      this.draw()
    }

    /**
     * Deletes the vertex from the path.
     */
    removeVertex() {
      const path = this.get('path')
      const vertex = this.get('vertex')

      if (!path || vertex == undefined) {
        this.close()
        return
      }

      path.removeAt(vertex)
      this.close()
    }
  }

  useEffect(() => {
    const createdPolyline = new google.maps.Polyline({
      map: map,
      path: positions.map((position) => new google.maps.LatLng(position.lat, position.lng)),
      editable: true,
      clickable: true,
    })
    const deleteMenu = new DeleteMenu()
    //
    google.maps.event.addListener(createdPolyline, 'contextmenu', (e: any) => {
      // Check if click was on a vertex control point
      if (e.vertex == undefined) {
        return
      }

      if (map) {
        deleteMenu.open(map, createdPolyline.getPath(), e.vertex)
      }
    })
    setPolyline(createdPolyline)

    return () => {
      createdPolyline.setMap(null)
    }
  }, [map])
  return { polyline, getLatlngs } as UseEditablePolylineReturnValue
}

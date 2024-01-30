import React from 'react'

const VerySlowComponent = ({value}:any) => {
    console.log("rendered very slow component")
  return (
    <div>
        {value}
    </div>
  )
}

export default React.memo(VerySlowComponent)

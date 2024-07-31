import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <div>
          <span className="ms-1">&copy; 2024. All rights reserved</span>
        </div>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

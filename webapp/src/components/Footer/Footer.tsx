import React, { useEffect } from 'react'
import { FooterProps } from 'decentraland-ui'
import { Footer as BaseFooter } from 'decentraland-dapps/dist/containers'
import * as tranlsations from '../../modules/translation/locales'

const locales = Object.keys(tranlsations)

const Footer = (props: FooterProps) => {
  useEffect(() => {
    const footer = document.querySelector('.copyright');
    if(footer){
      footer.innerHTML = footer.innerHTML.replace('Decentraland', 'Metaearth');
    }
  }, [])
  return (<BaseFooter locales={locales} {...props} />)
}

export default React.memo(Footer)

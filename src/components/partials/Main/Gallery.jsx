import styles from './Galleri.module.scss'

export const Gallery = props => {
          return (
            <div className={styles.gallerywrapper}>
              {props && props.imageList && props.imageList.map(item => {
                  return (
                      <img key={item.id} src={item.image}  />
                  )
              })}
            </div>
          )
        }
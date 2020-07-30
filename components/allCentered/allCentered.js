import styles from './styles.module.css'

const AllCentered = ({ children }) => {
  return (
    <div className={styles.dFlex}>
      {children}
    </div>
  )
}

export default AllCentered;
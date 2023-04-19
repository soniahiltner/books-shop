import styles from './Success.module.css'

const Success = () => {
  return (
    <div className={styles.success}>
      <h1>La operación ha sido completada con éxito</h1>
      <h2>Gracias por su compra</h2>
    </div>
  );
}

export default Success
import './styles.css'
import PropTypes from 'prop-types'

export default function List({ titulo }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <div className="container">
        <div>
          <h3>Lista não ordenada:</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

List.propTypes = {
  titulo: PropTypes.string.isRequired
}
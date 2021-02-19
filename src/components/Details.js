const Details = (props) => {
  <div>
    {props.details.name}
    <button onClick={() => openDetails(props.details.id)}>Details</button>
  </div>
  }
import data from "./data";

function Fullfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Fullfillments</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>PAID AT</th>
              <th>DELIVERED</th>
              <th>DELIVERED AT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.shipments.map((shipment) => (
              <tr
                key={shipment._id}
                className={shipment.isDelivered ? "shipped" : "notShipped"}
              >
                <td>{shipment._id}</td>
                <td>{shipment.createdAt}</td>
                <td>{shipment.totalPrice}</td>
                <td>{shipment.user.name}</td>
                <td>{shipment.isPaid}</td>
                <td>{shipment.paidAt}</td>
                <td>{shipment.isDelivered.toString()}</td>
                <td>{shipment.deliverableData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fullfillment;

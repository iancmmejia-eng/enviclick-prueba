import styles from './MessagesTable.css'

function MessagesTable({
  messages
}) {
    console.log(messages)
  return (

    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Mensaje</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message => (
            <tr key={message.id}>
              <td>
                {
                  new Date(
                    message.createdAt
                  ).toLocaleDateString()
                }
              </td>
              <td>
                {message.text}
              </td>
              <td>
                Enviado
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { MessagesTable };
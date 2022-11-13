import { gql, useQuery } from "@apollo/client"
import ClientRow from "./ClientRow";
const GET_CLIENTS = gql`
    query getClients {
        clients {
            name
            email
            phone
        }
    }
`

export default function Clients() {
    const { data, loading, error } = useQuery(GET_CLIENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  return <>{!loading && !error && (
    <table className="table table-hover">
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </thead>
        <tbody>
            {data.clients.map(client => (
                <ClientRow key={client.id} client={client}/>
            ))}
        </tbody>
    </table>
  )}</>;
}

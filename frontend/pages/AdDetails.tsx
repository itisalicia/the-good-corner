import { useParams } from "react-router";

function AdDetails () {
const { id } = useParams();

    return (  
        <div>
            <h1>Voici les détails des annonces {id}</h1>
        </div>
    );
}

export default AdDetails;
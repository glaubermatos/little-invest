import { useHistory } from 'react-router-dom'
 
export function Button(props) {
    
    const history  = useHistory()

    function goToCreateNewAccount() {
        history.push("/new-account")
    }

    return(
        <button 
            type="button" 
            className={`${props.tamanho} ${props.cor}`}
            onClick={props.onClick ? props.onClick : goToCreateNewAccount}
        >
            {props.children}
        </button>
    );
}
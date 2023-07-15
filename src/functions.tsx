import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function showAlerta(mensaje: string, icono: any, foco: string){
    onfocus(foco);
    const swal = withReactContent(Swal);
    swal.fire({
        title: mensaje,
        icon: icono,

    });
}

function onfocus(foco: any){
    if(foco !== ''){
        document.getElementById(foco)?.focus();
    }
}

import {NewProfile, NewFilms} from "./ExerciciosFilho";

const Perfil = () => {
    return (
        <div>
            <NewProfile nome="João" idade={21}/>
            <NewProfile nome="Maria" idade={30}/>
        </div>
    )
}

const Films = () => {
    return (
        <div>
            <NewFilms titulo="Piratas do Caribe" ano={2003}/>
            <NewFilms titulo="Harry Potter" ano={2001}/>
        </div>
    )
}

export {Perfil, Films}
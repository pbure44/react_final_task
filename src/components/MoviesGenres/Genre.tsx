import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'
import {IGenre} from "../../interfaces";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/movies',{state:genre.id})
    }

    return (
        <div className={css.Genre}>
            <a onClick={clickHandler}>{genre.name}</a>
        </div>
    );
};

export {Genre};
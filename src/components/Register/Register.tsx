import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {authActions} from "../../redux";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Register = () => {

    const {register, handleSubmit} = useForm<IAuth>();

    const dispatch = useAppDispatch();
    const {registerError,registerSuccess} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const reg: SubmitHandler<IAuth> = async (user) => {
        await dispatch(authActions.register({user}))

        await new Promise(resolve => setTimeout(resolve, 2000))
        navigate('/movies')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(reg)}>
                <input type='text' placeholder='username' {...register('username')}/>
                <input type='text' placeholder='password' {...register('password')}/>
                <button>Register</button>
            </form>
            {registerSuccess && <h4>{registerSuccess}</h4>}
        </div>
    );
};

export {
    Register
}
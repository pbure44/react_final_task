import {SubmitHandler, useForm} from "react-hook-form";

import {authActions} from "../../redux";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const {register, handleSubmit} = useForm<IAuth>();

    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    let isRegistered: string = null;

    const reg: SubmitHandler<IAuth> = async (user) => {
        await dispatch(authActions.register({user}))
        isRegistered = 'New user was registered. Now you will be transferred to Login page';
        console.log(isRegistered);
        await new Promise(resolve => setTimeout(resolve, 3000))
        navigate('/login')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(reg)}>
                <input type='text' placeholder='username' {...register('username')}/>
                <input type='text' placeholder='password' {...register('password')}/>
                <button>Register</button>
            </form>
            {isRegistered && <h3>{isRegistered}</h3>}
        </div>
    );
};

export {
    Register
}
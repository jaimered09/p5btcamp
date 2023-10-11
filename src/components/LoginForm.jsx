
import { useNavigate } from "react-router-dom";
import UsersContext from "../context/UsersContext"
import { useContext, useEffect, useState } from "react"



export const LoginForm = () => {

    const navigate = useNavigate();
    const userCtx = useContext(UsersContext)


    console.log(userCtx)
    const {
        loginUser,
        authStatus,
        verifyingToken
    } = userCtx

    const [data, setData] = useState({
        correo: '',
        password: '',
    })

    useEffect(() => {
        verifyingToken()
    
        if(authStatus) {
            navigate("/books")
        }
    }, [authStatus, verifyingToken, navigate])

    const onChangeData = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        loginUser(data)

        console.log('soy el submit')
    }

    return (
        <>
            <div>
                <h2 className="text-center">Iniciar Sesion</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit = {(e) => { onSubmitData(e)}}>
                    <div>
                        <div>
                            <label htmlFor="correo">Ingresa tu Correo Electrónic@</label>
                            <input 
                                type="email"
                                name= "correo"
                                id="correo"
                                placeholder="tucorreo@gmail.com"
                                onChange={(e) => {onChangeData(e)}}
                                required 
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Ingresa la Contraseña</label>
                            <input 
                                type="password"
                                name= "password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => {onChangeData(e)}}
                                required 
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Iniciar Sesion</button>
                        <img src="public/images2/hand.jpeg" alt="phonehand"  width={400} height={350} />
                    </div>
                </form>
            </div>
        </>
    )
}
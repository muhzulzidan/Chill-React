import { useRouteError } from "react-router-dom";

const ErrorPage = () => { 
    const error = useRouteError();
    
    return (
        <div className="flex justify-center items-center flex-col min-h-screen">
            <h1 className="text-3xl font-bold">Ngapain Bang ?</h1>
            <p className="my-5 text-xl">Ga ada routingnya.</p>
            <p className="text-2xl text-red-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createUser} from "../features/getUserSlice.js";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [users, setUsers] = useState({});

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate("/read");
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-2xl mb-16">
                <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-16" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="name" type="text" placeholder="Username" onChange={getUserData}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email" type="email" placeholder="Email" onChange={getUserData}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Age
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3
                            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="age" type="text" placeholder="Age" onChange={getUserData}/>
                    </div>
                    {/*Radio Buttons*/}
                    <div className="flex-row justify-self-auto mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-3" htmlFor="Gender">
                            Gender
                        </label>
                        <div>
                            <input
                                id="red-radio"
                                type="radio"
                                value="Male"
                                name="gender"
                                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500
                                dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                                dark:border-gray-600"
                                onChange={getUserData}
                            />
                            <label
                                htmlFor="red-radio"
                                className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                            >
                                Male
                            </label>
                            <input
                                id="green-radio"
                                type="radio"
                                value="Female"
                                name="gender"
                                className="ml-4 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500
                                dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                                dark:border-gray-600"
                                onChange={getUserData}
                            />
                            <label
                                htmlFor="green-radio"
                                className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                            >
                                Female
                            </label>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                            focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {updateUser} from "../features/getUserSlice.js";

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
    }, []);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    };

    return (
        <div>
            <h2 className="my-2">Edit the data</h2>
            <form className="w-1/2 mx-auto my-5" onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        value={updateData && updateData.name}
                        onChange={newData}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        value={updateData && updateData.email}
                        onChange={newData}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        value={updateData && updateData.age}
                        onChange={newData}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        checked={updateData && updateData.gender === "Male"}
                        onChange={newData}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-4">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        checked={updateData && updateData.gender === "Female"}
                        onChange={newData}
                    />
                    <label className="form-check-label">Female</label>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;

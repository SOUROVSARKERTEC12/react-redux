import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteUser, showUser} from "../features/getUserSlice.js";
import ReactLoading from 'react-loading';
import {Link} from "react-router-dom";
import CustomModal from "./CustomModal.jsx";

const Read = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState();

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const {users, loading, searchData} = useSelector((state) => state.app);

    useEffect(() => {
        // console.log(showUser)
        dispatch(showUser());
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen mt-10"><ReactLoading type="spin" color="green"
                                                                                        height={667} width={375}/>
        </div>;
    }
    return (
        <div>
            {showPopup && (
                <CustomModal
                    id={id}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                />
            )}
            <h2 className="text-2xl font-bold mb-4">All data</h2>

            <input
                className="form-check-input"
                name="gender"
                checked={radioData === ""}
                type="radio"
                onChange={() => setRadioData("")}
            />
            <label className="form-check-label">All</label>

            <input
                className="form-check-input"
                name="gender"
                checked={radioData === "Male"}
                value="Male"
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label className="form-check-label">Male</label>

            <input
                className="form-check-input"
                name="gender"
                value="Female"
                checked={radioData === "Female"}
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label className="form-check-label">Female</label>

            <div>
                {users &&
                    users
                        .filter((ele) => {
                            if (searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name.toLowerCase().includes(searchData.toLowerCase());
                            }
                        })
                        .filter((ele) => {
                            if (radioData === "Male") {
                                return ele.gender === radioData;
                            } else if (radioData === "Female") {
                                return ele.gender === radioData;
                            } else return ele;
                        })
                        .map((ele) => (
                            <div key={ele.id} className="card w-1/2 mx-auto my-2">
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                    <p className="card-text">{ele.gender}</p>
                                    <button
                                        className="card-link bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                                    >
                                        View
                                    </button>
                                    <Link
                                        to={`/edit/${ele.id}`}
                                        className="card-link bg-yellow-500 text-white px-4 py-2 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        onClick={() => dispatch(deleteUser(ele.id))}
                                        className="card-link bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ))}
            </div>
        </div>

    )
}

export default Read
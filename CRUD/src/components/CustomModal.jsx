import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
    const allusers = useSelector((state) => state.app.users);

    const singleUser = allusers.filter((ele) => ele.id === id);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 w-96 rounded-lg shadow-md">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={() => setShowPopup(false)}
                >
                    Close
                </button>
                <h2 className="text-2xl font-bold mb-2">{singleUser[0].name}</h2>
                <h3 className="text-lg text-gray-600 mb-2">{singleUser[0].email}</h3>
                <h4 className="text-lg text-gray-600 mb-2">{singleUser[0].age}</h4>
                <p className="text-gray-700">{singleUser[0].gender}</p>
            </div>
        </div>
    );
};

export default CustomModal;

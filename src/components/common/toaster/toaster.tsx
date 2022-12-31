import {toast} from 'react-toastify'

const Toaster = ({type, message, options = {}}: any) => {
    const _options = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        // closeOnClick: true,
        draggable: true,
        progress: undefined,
        ...options
    }

    switch (type) {
        case "success": {
            return toast.success(message, _options);
        }
        case 'info': {
            return toast.info(message, _options);
        }

        case 'warning': {
            return toast.warn(message, _options);
        }
        case 'error': {
            return toast.error(message, _options);
        }
        default: {
            return toast.success(message, _options);
        }
    }
}


export default Toaster
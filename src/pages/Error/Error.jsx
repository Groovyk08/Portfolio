import '../../styles/Error.css';
import { Link } from 'react';
function Error() {
    return (
        <div>
            <h1>Page Not Found.</h1>
            <h3>Every roads lead to Rome...except this one. 🤷🏾‍♂️</h3>
            <div>
                <Link to="/">Go back to the home page.</Link>
            </div>
        </div>
    );
}

export default Error;

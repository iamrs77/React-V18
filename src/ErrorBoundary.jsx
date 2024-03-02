import { Link } from "react-router-dom";
import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Errorboudnary component caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with the Listing{" "}
                    <Link to="/">Click here to go to home page</Link>
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">Oops! Page not found.</p>
      <Link to="/dashboard">
        <Button variant="default">Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;

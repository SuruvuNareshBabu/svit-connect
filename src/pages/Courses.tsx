import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Courses = () => {
  const resources = [
    {
      name: "Java",
      link: "https://www.w3schools.com/java/default.asp",
      description: "Learn Java programming step by step from basics.",
    },
    {
      name: "Python",
      link: "https://www.w3schools.com/python/default.asp",
      description: "Master Python for development and data science.",
    },
    {
      name: "C Programming",
      link: "https://www.w3schools.com/c/index.php",
      description: "Understand the fundamentals of C language.",
    },
    {
      name: "C++",
      link: "https://www.w3schools.com/cpp/default.asp",
      description: "Learn object-oriented programming with C++.",
    },
    {
      name: "SQL",
      link: "https://www.w3schools.com/sql/default.asp",
      description: "Practice SQL queries and database management.",
    },
    {
      name: "Git",
      link: "https://www.w3schools.com/git/default.asp",
      description: "Learn version control with Git step by step.",
    },
    {
      name: "Free Courses Hub",
      link: "https://www.geeksforgeeks.org/courses",
      description: "Explore free courses and tutorials on GFG.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-primary" />
            Free Courses & Resources
          </h1>
          <p className="text-muted-foreground">
            Click any course below to start learning for free.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition border p-4 flex flex-col justify-between"
            >
              <div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg">{resource.name}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-0">
                <Button asChild variant="outline" className="w-full mt-3">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Access Free
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

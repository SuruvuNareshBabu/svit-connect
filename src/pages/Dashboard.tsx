import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Clock, Trophy, Users, FileText, Video, Bell, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
const Dashboard = () => {
  const courses = [{
    name: "Data Structures & Algorithms",
    progress: 75,
    instructor: "Dr. Ravi Kumar",
    nextClass: "Today, 10:00 AM",
    status: "In Progress"
  }, {
    name: "Computer Networks",
    progress: 60,
    instructor: "Prof. Priya Sharma",
    nextClass: "Tomorrow, 2:00 PM",
    status: "In Progress"
  }, {
    name: "Database Management",
    progress: 85,
    instructor: "Dr. Suresh Reddy",
    nextClass: "Friday, 11:00 AM",
    status: "Near Complete"
  }];
  const todaySchedule = [{
    subject: "Data Structures",
    time: "10:00 - 11:00 AM",
    room: "Lab 1",
    teacher: "Dr. Ravi Kumar"
  }, {
    subject: "Computer Networks",
    time: "11:00 - 12:00 PM",
    room: "Room 203",
    teacher: "Prof. Priya"
  }, {
    subject: "Database Lab",
    time: "2:00 - 4:00 PM",
    room: "Lab 2",
    teacher: "Dr. Suresh"
  }];
  const announcements = [{
    title: "Mid-term Exams Schedule Released",
    time: "2 hours ago",
    priority: "high"
  }, {
    title: "New Library Books Available",
    time: "1 day ago",
    priority: "medium"
  }, {
    title: "Campus Event: Tech Fest 2024",
    time: "3 days ago",
    priority: "low"
  }];
  return <div className="min-h-screen pt-20 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-primary">SURUVU NARESH

          </span>
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your academic journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="card-hover">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">6</h3>
                  <p className="text-xs text-muted-foreground">Active Courses</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">8.5</h3>
                  <p className="text-xs text-muted-foreground">CGPA</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">85%</h3>
                  <p className="text-xs text-muted-foreground">Attendance</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-6 w-6 text-success mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-xs text-muted-foreground">Assignments</p>
                </CardContent>
              </Card>
            </div>

            {/* Course Progress */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  My Courses
                </CardTitle>
                <CardDescription>Track your progress across all subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{course.name}</h4>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{course.progress}%</p>
                        <p className="text-xs text-muted-foreground">{course.status}</p>
                      </div>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>)}
                <Button variant="outline" className="w-full mt-4">
                  View All Courses
                </Button>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Classes
                </CardTitle>
                <CardDescription>Your schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaySchedule.map((class_, index) => <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-medium">{class_.subject}</h4>
                        <p className="text-sm text-muted-foreground">{class_.teacher}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{class_.time}</p>
                        <p className="text-xs text-muted-foreground">{class_.room}</p>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Assignment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="mr-2 h-4 w-4" />
                  Join Live Class
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Study Groups
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="mr-2 h-4 w-4" />
                  View Certificates
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {announcements.map((announcement, index) => <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      {announcement.priority === 'high' ? <AlertCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" /> : <Bell className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight">{announcement.title}</p>
                        <p className="text-xs text-muted-foreground">{announcement.time}</p>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-destructive rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">OS Assignment</p>
                      <p className="text-xs text-muted-foreground">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-warning rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Database Project</p>
                      <p className="text-xs text-muted-foreground">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-success rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Network Lab Report</p>
                      <p className="text-xs text-muted-foreground">Due in 1 week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;
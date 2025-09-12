import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award,
  Target,
  Eye,
  Heart,
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Microscope,
  Cpu,
  Trophy
} from "lucide-react";
import svitLogo from "@/assets/svit-logo.png";

const About = () => {
  const stats = [
    { icon: Users, label: "Total Students", value: "2,500+", color: "text-primary" },
    { icon: GraduationCap, label: "Faculty Members", value: "150+", color: "text-secondary" },
    { icon: BookOpen, label: "Programs Offered", value: "25+", color: "text-accent" },
    { icon: Award, label: "Awards Won", value: "50+", color: "text-success" }
  ];

  const programs = [
    {
      name: "Computer Science Engineering",
      code: "CSE",
      duration: "4 Years",
      seats: 120,
      description: "Advanced computing, programming, and software development"
    },
    {
      name: "Electronics & Communication",
      code: "ECE", 
      duration: "4 Years",
      seats: 60,
      description: "Electronics, communication systems, and signal processing"
    },
    {
      name: "Mechanical Engineering",
      code: "MECH",
      duration: "4 Years", 
      seats: 60,
      description: "Design, manufacturing, and mechanical systems"
    },
    {
      name: "Civil Engineering",
      code: "CIVIL",
      duration: "4 Years",
      seats: 60,
      description: "Infrastructure, construction, and structural engineering"
    }
  ];

  const facilities = [
    {
      name: "State-of-the-art Laboratories",
      description: "Modern computer labs, electronics labs, and research facilities",
      icon: Microscope
    },
    {
      name: "Central Library",
      description: "Extensive collection of books, journals, and digital resources",
      icon: BookOpen
    },
    {
      name: "Innovation Center",
      description: "Dedicated space for student projects and startup incubation",
      icon: Cpu
    },
    {
      name: "Sports Complex",
      description: "Indoor and outdoor sports facilities for all-round development",
      icon: Trophy
    }
  ];

  const achievements = [
    "NAAC 'A' Grade Accreditation",
    "NBA Accredited Programs",
    "Top 100 Engineering Colleges in India",
    "Excellence in Placement Record",
    "Best Innovation Award 2023",
    "Green Campus Initiative Winner"
  ];

  return (
    <div className="min-h-screen pt-20 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={svitLogo} 
              alt="SVIT Logo" 
              className="h-24 w-24 animate-float"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sri Venkateswara Institute
            </span>
            <br />
            <span className="text-foreground">of Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A premier engineering institution dedicated to academic excellence, 
            innovation, and holistic development of students since 2007.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover text-center animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To emerge as a leading institution in engineering education, 
                  research and innovation, producing competent professionals who 
                  contribute to technological advancement and societal development.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide quality technical education with industry-relevant curriculum</li>
                  <li>• Foster research and innovation culture among students and faculty</li>
                  <li>• Develop ethical and socially responsible engineers</li>
                  <li>• Promote entrepreneurship and leadership skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Core Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Excellence', 'Integrity', 'Innovation', 'Inclusivity', 'Sustainability'].map((value) => (
                    <Badge key={value} variant="secondary" className="px-3 py-1">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* College Information */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  About SVIT
                </CardTitle>
                <CardDescription>Learn about our institution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sri Venkateswara Institute of Technology (SVIT) is a premier engineering 
                  college located in the spiritual city of Tirupati, Andhra Pradesh. 
                  Established in 2007, SVIT has grown to become one of the leading 
                  technical institutions in South India.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Hampapuram, Anantapur, Andhra Pradesh - 515001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Established: 2007</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">+91 8555 277 777</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">info@svitatp.ac.in</span>
                  </div>
                </div>

                <Button className="w-full mt-4">
                  Visit Official Website
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Achievements & Recognitions</CardTitle>
                <CardDescription>Our accolades and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Academic Programs */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Academic Programs</h2>
            <p className="text-muted-foreground">
              Comprehensive engineering programs designed for industry readiness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{program.code}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration: {program.duration}</span>
                    <span className="text-muted-foreground">Seats: {program.seats}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">World-Class Facilities</h2>
            <p className="text-muted-foreground">
              Modern infrastructure supporting academic and research excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <facility.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{facility.name}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="card-hover bg-gradient-hero text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Join SVIT?</h2>
            <p className="text-lg mb-6 opacity-90">
              Take the first step towards your engineering career with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Campus Tour
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
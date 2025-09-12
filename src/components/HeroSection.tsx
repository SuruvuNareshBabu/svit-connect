import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Students", value: "2,500+", color: "text-primary" },
    { icon: GraduationCap, label: "Faculty", value: "150+", color: "text-secondary" },
    { icon: BookOpen, label: "Courses", value: "25+", color: "text-accent" },
    { icon: Trophy, label: "Awards", value: "50+", color: "text-success" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sri Venkateswara
              </span>
              <br />
              <span className="text-foreground">Institute of Technology</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering minds through cutting-edge education and innovation. 
              Join our next-generation Learning Management System.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform duration-200 glow-primary">
                <GraduationCap className="mr-2 h-5 w-5" />
                Access Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Tour
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="card-hover bg-gradient-glass border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <BookOpen className="h-16 w-16 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <GraduationCap className="h-20 w-20 text-secondary animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
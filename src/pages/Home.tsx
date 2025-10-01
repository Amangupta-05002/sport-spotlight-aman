import { Link } from "react-router-dom";
import { TrendingUp, Users, Trophy, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SportCard from "@/components/SportCard";
import StatCard from "@/components/StatCard";
import heroImage from "@/assets/hero-sports.jpg";
import cricketIcon from "@/assets/cricket-icon.jpg";
import footballIcon from "@/assets/football-icon.jpg";
import hockeyIcon from "@/assets/hockey-icon.jpg";
import volleyballIcon from "@/assets/volleyball-icon.jpg";

const Home = () => {
  const sports = [
    {
      title: "Cricket",
      description: "Comprehensive cricket analytics with player stats, team comparisons, and performance trends",
      image: cricketIcon,
      link: "/cricket"
    },
    {
      title: "Football",
      description: "In-depth football statistics including goals, assists, and match performance analysis",
      image: footballIcon,
      link: "/dashboard"
    },
    {
      title: "Hockey",
      description: "Detailed hockey analytics covering player performance and tournament data",
      image: hockeyIcon,
      link: "/dashboard"
    },
    {
      title: "Volleyball",
      description: "Complete volleyball statistics with team trends and player performance metrics",
      image: volleyballIcon,
      link: "/dashboard"
    }
  ];

  const stats = [
    { icon: Trophy, value: "50K+", label: "Matches Analyzed", trend: "+12% this month" },
    { icon: Users, value: "10K+", label: "Players Tracked", trend: "+8% this month" },
    { icon: TrendingUp, value: "500+", label: "Teams Monitored", trend: "+15% this month" },
    { icon: BarChart3, value: "1M+", label: "Data Points", trend: "+20% this month" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sports" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Hub for Sports Analytics
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get comprehensive insights across Cricket, Football, Hockey, Volleyball and more with real-time data and advanced analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/dashboard">Explore Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/20 border-primary-foreground/20 text-primary-foreground hover:bg-card/30">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </section>

      {/* Sports Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Sports Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dive into comprehensive statistics and performance metrics across multiple sports
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <div key={sport.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <SportCard {...sport} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts exploring comprehensive analytics and insights
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/dashboard">Access Dashboard</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;

import { useState } from "react";
import { TrendingUp, Users, Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatCard from "@/components/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [activeSport, setActiveSport] = useState("cricket");

  const sportStats = {
    cricket: {
      stats: [
        { icon: TrendingUp, value: "89.5%", label: "Win Rate", trend: "+5% from last season" },
        { icon: Users, value: "250", label: "Players", trend: "15 new this month" },
        { icon: Target, value: "45.2", label: "Avg Score", trend: "+2.3 points" },
        { icon: Award, value: "15", label: "Championships", trend: "3 this year" }
      ],
      topPlayers: [
        { name: "Virat Kohli", stats: "8,074 runs, Avg: 52.1", team: "India" },
        { name: "Steve Smith", stats: "7,540 runs, Avg: 61.8", team: "Australia" },
        { name: "Joe Root", stats: "9,125 runs, Avg: 49.0", team: "England" }
      ]
    },
    football: {
      stats: [
        { icon: TrendingUp, value: "75.2%", label: "Win Rate", trend: "+8% from last season" },
        { icon: Users, value: "180", label: "Players", trend: "12 new this month" },
        { icon: Target, value: "2.5", label: "Goals/Game", trend: "+0.5 goals" },
        { icon: Award, value: "8", label: "Trophies", trend: "2 this year" }
      ],
      topPlayers: [
        { name: "Lionel Messi", stats: "672 goals, 268 assists", team: "Inter Miami" },
        { name: "Cristiano Ronaldo", stats: "701 goals, 221 assists", team: "Al Nassr" },
        { name: "Kylian Mbappé", stats: "256 goals, 108 assists", team: "Real Madrid" }
      ]
    },
    hockey: {
      stats: [
        { icon: TrendingUp, value: "82.1%", label: "Win Rate", trend: "+6% from last season" },
        { icon: Users, value: "95", label: "Players", trend: "8 new this month" },
        { icon: Target, value: "3.8", label: "Goals/Game", trend: "+0.8 goals" },
        { icon: Award, value: "12", label: "Championships", trend: "1 this year" }
      ],
      topPlayers: [
        { name: "Connor McDavid", stats: "1,040 points, 337 goals", team: "Oilers" },
        { name: "Nathan MacKinnon", stats: "782 points, 294 goals", team: "Avalanche" },
        { name: "Auston Matthews", stats: "649 points, 368 goals", team: "Maple Leafs" }
      ]
    },
    volleyball: {
      stats: [
        { icon: TrendingUp, value: "78.5%", label: "Win Rate", trend: "+4% from last season" },
        { icon: Users, value: "120", label: "Players", trend: "10 new this month" },
        { icon: Target, value: "25.3", label: "Points/Set", trend: "+1.5 points" },
        { icon: Award, value: "6", label: "Championships", trend: "1 this year" }
      ],
      topPlayers: [
        { name: "Wilfredo León", stats: "345 spikes, 89 blocks", team: "Poland" },
        { name: "Earvin Ngapeth", stats: "298 spikes, 67 blocks", team: "France" },
        { name: "Matt Anderson", stats: "312 spikes, 78 blocks", team: "USA" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sports Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analytics across multiple sports
          </p>
        </div>

        <Tabs defaultValue="cricket" className="space-y-8" onValueChange={setActiveSport}>
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="cricket" className="text-sm md:text-base py-3">Cricket</TabsTrigger>
            <TabsTrigger value="football" className="text-sm md:text-base py-3">Football</TabsTrigger>
            <TabsTrigger value="hockey" className="text-sm md:text-base py-3">Hockey</TabsTrigger>
            <TabsTrigger value="volleyball" className="text-sm md:text-base py-3">Volleyball</TabsTrigger>
          </TabsList>

          {Object.entries(sportStats).map(([sport, data]) => (
            <TabsContent key={sport} value={sport} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.stats.map((stat, index) => (
                  <div key={stat.label} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>

              {/* Top Players */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Players</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.topPlayers.map((player, index) => (
                      <div 
                        key={player.name}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors animate-slide-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div>
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-sm text-muted-foreground">{player.stats}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{player.team}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder for Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                      <p className="text-muted-foreground">Chart visualization coming soon</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                      <p className="text-muted-foreground">Ranking data coming soon</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Dashboard;

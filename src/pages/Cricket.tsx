import { TrendingUp, Users, Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cricket = () => {
  const stats = [
    { icon: TrendingUp, value: "89.5%", label: "Win Rate", trend: "+5% from last season" },
    { icon: Users, value: "250", label: "Active Players", trend: "15 new this month" },
    { icon: Target, value: "45.2", label: "Avg Score", trend: "+2.3 runs" },
    { icon: Award, value: "15", label: "Championships", trend: "3 this year" }
  ];

  const topBatsmen = [
    { name: "Virat Kohli", runs: "8,074", average: "52.1", strikeRate: "93.2", team: "India" },
    { name: "Steve Smith", runs: "7,540", average: "61.8", strikeRate: "88.5", team: "Australia" },
    { name: "Joe Root", runs: "9,125", average: "49.0", strikeRate: "86.3", team: "England" },
    { name: "Kane Williamson", runs: "6,173", average: "54.3", strikeRate: "82.1", team: "New Zealand" }
  ];

  const topBowlers = [
    { name: "James Anderson", wickets: "617", average: "26.8", economy: "2.89", team: "England" },
    { name: "Stuart Broad", wickets: "537", average: "27.8", economy: "2.91", team: "England" },
    { name: "Pat Cummins", wickets: "223", average: "22.3", economy: "2.85", team: "Australia" },
    { name: "Jasprit Bumrah", wickets: "128", average: "22.1", economy: "2.76", team: "India" }
  ];

  const teamRankings = [
    { rank: 1, team: "Australia", rating: "125.3", wins: "45", losses: "12" },
    { rank: 2, team: "India", rating: "121.8", wins: "42", losses: "15" },
    { rank: 3, team: "England", rating: "118.5", wins: "38", losses: "18" },
    { rank: 4, team: "New Zealand", rating: "115.2", wins: "35", losses: "20" },
    { rank: 5, team: "South Africa", rating: "112.7", wins: "33", losses: "22" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Cricket Analytics</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive cricket statistics and performance insights
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Player Stats Tabs */}
        <Tabs defaultValue="batsmen" className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
            <TabsTrigger value="batsmen">Top Batsmen</TabsTrigger>
            <TabsTrigger value="bowlers">Top Bowlers</TabsTrigger>
          </TabsList>

          <TabsContent value="batsmen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Leading Batsmen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Player</th>
                        <th className="text-right py-3 px-4">Runs</th>
                        <th className="text-right py-3 px-4">Average</th>
                        <th className="text-right py-3 px-4">Strike Rate</th>
                        <th className="text-left py-3 px-4">Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topBatsmen.map((player, index) => (
                        <tr 
                          key={player.name} 
                          className="border-b hover:bg-muted/50 transition-colors animate-slide-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="py-3 px-4 font-medium">{player.name}</td>
                          <td className="text-right py-3 px-4">{player.runs}</td>
                          <td className="text-right py-3 px-4">{player.average}</td>
                          <td className="text-right py-3 px-4">{player.strikeRate}</td>
                          <td className="py-3 px-4">{player.team}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bowlers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Leading Bowlers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Player</th>
                        <th className="text-right py-3 px-4">Wickets</th>
                        <th className="text-right py-3 px-4">Average</th>
                        <th className="text-right py-3 px-4">Economy</th>
                        <th className="text-left py-3 px-4">Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topBowlers.map((player, index) => (
                        <tr 
                          key={player.name} 
                          className="border-b hover:bg-muted/50 transition-colors animate-slide-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="py-3 px-4 font-medium">{player.name}</td>
                          <td className="text-right py-3 px-4">{player.wickets}</td>
                          <td className="text-right py-3 px-4">{player.average}</td>
                          <td className="text-right py-3 px-4">{player.economy}</td>
                          <td className="py-3 px-4">{player.team}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Team Rankings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Team Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Rank</th>
                    <th className="text-left py-3 px-4">Team</th>
                    <th className="text-right py-3 px-4">Rating</th>
                    <th className="text-right py-3 px-4">Wins</th>
                    <th className="text-right py-3 px-4">Losses</th>
                  </tr>
                </thead>
                <tbody>
                  {teamRankings.map((team, index) => (
                    <tr 
                      key={team.team} 
                      className="border-b hover:bg-muted/50 transition-colors animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                          {team.rank}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">{team.team}</td>
                      <td className="text-right py-3 px-4 font-semibold text-accent">{team.rating}</td>
                      <td className="text-right py-3 px-4">{team.wins}</td>
                      <td className="text-right py-3 px-4">{team.losses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <p className="text-muted-foreground">Performance chart visualization coming soon</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Match Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Match data visualization coming soon</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Cricket;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SportCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const SportCard = ({ title, description, image, link }: SportCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild className="w-full group/btn">
          <Link to={link}>
            View Analytics
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SportCard;

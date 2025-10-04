import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

export function CardAppointment() {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="bg-zinc-800 h-[170px]">
        <CardContent
          onClick={() => navigate("/appointment")}
          className="text-white relative"
        >
          <h1 className="text-xl relative bottom-0 top-7 left-0">
            Agende no <br />
            melhor
          </h1>
        </CardContent>
      </Card>
    </div>
  );
}

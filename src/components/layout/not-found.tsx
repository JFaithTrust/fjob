import "./not-found.css"
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="flex flex-col gap-y-4 justify-center items-center">
                <h3 className={"font-bold text-2xl"}>
                  Afsuski, sahifa topilmadi!
                </h3>

                <Button className={"px-12 py-4 rounded-3xl flex items-center w-fit"} onClick={() => navigate("/")}>Go to
                  Home <ArrowRight/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;